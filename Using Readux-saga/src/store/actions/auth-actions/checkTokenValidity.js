const checkTokenValidity = (expTime) => {
    const expiredTime = new Date(expTime * 1000).getTime() - new Date().getTime();

    // check if token does exists & valid
    if (expiredTime > 0 && expiredTime <= 3600000) {
        return true;
    } else {
        return false;
    }
};

export default checkTokenValidity;