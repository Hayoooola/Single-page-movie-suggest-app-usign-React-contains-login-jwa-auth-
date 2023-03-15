const findRatingByUserName = (movieObj, userName) => {
    const voteArray = movieObj.votes ? movieObj.votes.filter((voteObj) => voteObj.userName === userName) : [];
    const vote = voteArray[0] ? voteArray[0].vote : null;
    return vote;
};

export default findRatingByUserName;
