import axios from "axios";

export const editSelectedMovie = async (movieObj, title, summery, rating, Year, url) => {
    const userName = JSON.parse(localStorage.getItem("email"));
    const token = JSON.parse(localStorage.getItem("token"));

    // calculate new vote array
    const prevVotesArray = movieObj.votes;
    const votesArrayRemovingEditingUsername = prevVotesArray.filter(voteObj => voteObj.userName !== userName);
    const newVoteArray = [...votesArrayRemovingEditingUsername, { userName, vote: rating }];

    const config = { Title: title, summery, votes: newVoteArray, Year, Poster: url };

    await axios.patch(`http://127.0.0.1:8000/movies/${movieObj.id}`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });
};