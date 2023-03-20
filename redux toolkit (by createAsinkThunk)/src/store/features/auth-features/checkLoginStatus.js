const { createSlice } = require("@reduxjs/toolkit");

const checkTokenValidity = (expTime) => {
    const expiredTime = new Date(expTime * 1000).getTime() - new Date().getTime();
    if (expiredTime > 0 && expiredTime <= 3600000) {
        return expiredTime;
    } else {
        return false;
    }
};

const checkStatus = createSlice({
    name: "checkStatus",
    initialState: { isUserLogin: false, token: null },
    reducers: {
        checkLoginStatus: () => {
            const token = JSON.parse(localStorage.getItem("token")) || null;
            const exp = JSON.parse(localStorage.getItem("exp")) || null;

            const expiredTime = checkTokenValidity(exp);

            return (expiredTime && token) ? { isUserLogin: true, token: token } : { isUserLogin: false, token: null };
        }
    }
});

export const { checkLoginStatus } = checkStatus.actions;
export default checkStatus.reducer;
