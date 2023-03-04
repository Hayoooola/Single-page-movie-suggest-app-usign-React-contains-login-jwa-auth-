import axios from "axios";

export const addNewMovieRequest = async (title, summery, rating, Year, url) => {
    const userName = JSON.parse(localStorage.getItem("email"));
    const token = JSON.parse(localStorage.getItem("token"));
    const VoteArray = [{ userName, vote: rating }];

    const config = { Title: title, summery, votes: VoteArray, Year, Poster: url, userName };

    await axios.post(`http://127.0.0.1:8000/movies`,
        config, {
        headers: { authorization: `Bearer ${token}` }
    });
};