import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: "authApi",
    tagTypes: ["auth"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        prepareHeaders: (headers) => {
            const token = JSON.parse(localStorage.getItem("token"));
            token && headers.set("authorization", `Bearer ${token}`);

            return token ? headers : null;
        }
    }),
    endpoints: (builder) => ({
        loginRequest: builder.mutation({
            query: ({ userName, password }) => {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: { email: userName, password }
                };
            },
        }),

        signUpRequest: builder.mutation({
            query: ({ firstName, lastName, email, password }) => ({
                url: "/auth/register",
                method: "POST",
                body: { firstName, lastName, email, password }
            })
        })
    })
});

export const { useLoginRequestMutation, useSignUpRequestMutation } = authApi;