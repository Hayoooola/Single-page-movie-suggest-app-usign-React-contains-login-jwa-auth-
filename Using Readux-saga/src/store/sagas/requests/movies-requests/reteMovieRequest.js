import axios from "axios";

export const rateSelectedMovie = async (movieObj, rate) => {


    const votesArray = [...movieObj.votes];
    const token = JSON.parse(localStorage.getItem("token"));
    const email = JSON.parse(localStorage.getItem("email"));

    let config;
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

    const response = await axios.patch(`http://localhost:8000/movies/${movieObj.id}`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });

    return response.data;
};