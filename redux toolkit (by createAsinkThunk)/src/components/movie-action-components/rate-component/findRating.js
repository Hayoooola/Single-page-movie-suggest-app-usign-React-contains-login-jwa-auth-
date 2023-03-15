export const findRating = (movieObj) => {
    const hasAnyVotes = movieObj.votes || null;
    if (hasAnyVotes) {
        const ratesArray = movieObj.votes.map(voteObj => {
            return voteObj.vote;
        });
        const rateSum = ratesArray.reduce((a, b) => (a + b));
        const rating = rateSum / ratesArray.length;
        const roundedVote = Math.round(rating * 2) / 2;

        const votesCount = movieObj.votes.length;
        return [roundedVote, votesCount];
    } else {
        return [null, null];
    }
};