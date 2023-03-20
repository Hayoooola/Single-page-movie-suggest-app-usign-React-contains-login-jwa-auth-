import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const movieApi = createApi({
    reducerPath: "movieApi",
    tagTypes: ["movies"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/movies",
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem("token"));
            token && headers.set("authorization", `Bearer ${token}`);

            return headers;
        }
    }),
    endpoints: (builder) => ({
        fetchAllMovies: builder.query({
            query: () => "/",
            providesTags: ["movies"]
        }),

        fetchSelectedMovie: builder.query({
            query: ({ movieId }) => `/${movieId}`,
        }),

        addNewMovie: builder.mutation({
            query: ({ title, summery, rating, Year, url }) => {
                const userName = JSON.parse(localStorage.getItem("email"));

                // calculate new vote array
                const VoteArray = [{ userName, vote: rating }];

                const config = { Title: title, summery, votes: VoteArray, Year, Poster: url, userName };

                return {
                    url: "/",
                    method: "POST",
                    body: config
                };
            },
            invalidatesTags: ["movies"]
        }),

        editMovie: builder.mutation({
            query: ({ movieObj, title, summery, rating, Year, url }) => {
                const userName = JSON.parse(localStorage.getItem("email"));

                // calculate new vote array
                const prevVotesArray = movieObj.votes;
                const votesArrayRemovingEditingUsername = prevVotesArray.filter(voteObj => voteObj.userName !== userName);
                const newVoteArray = [...votesArrayRemovingEditingUsername, { userName, vote: rating }];

                const config = { Title: title, summery, votes: newVoteArray, Year, Poster: url };

                return {
                    url: `/${movieObj.id}`,
                    method: "PATCH",
                    body: config
                };
            },
            invalidatesTags: ["movies"]
        }),

        deleteMovie: builder.mutation({
            query: ({ movieId }) => ({
                url: `/${movieId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["movies"]
        }),

        rateMovie: builder.mutation({
            query: ({ movieObj, value: rate }) => {
                const votesArray = [...movieObj.votes];
                const token = JSON.parse(localStorage.getItem("token"));
                const email = JSON.parse(localStorage.getItem("email"));
                let config;

                // configure voteArray and replace prev user vote
                const isUserVoteBefore = votesArray.some((voteObj) => voteObj.userName === email);
                if (isUserVoteBefore) {
                    const newArray = votesArray.filter((vote) => vote.userName !== email);
                    config = {
                        votes: [...newArray, { userName: email, vote: rate }]
                    };
                } else {
                    config = {
                        votes: [...votesArray, { userName: email, vote: rate }]
                    };
                }

                return {
                    url: `/${movieObj.id}`,
                    method: "PATCH",
                    body: config
                };
            },
            invalidatesTags: ["movies"]
        })
    })
});

export const { useFetchAllMoviesQuery, useFetchSelectedMovieQuery, useAddNewMovieMutation, useEditMovieMutation, useDeleteMovieMutation, useRateMovieMutation } = movieApi;