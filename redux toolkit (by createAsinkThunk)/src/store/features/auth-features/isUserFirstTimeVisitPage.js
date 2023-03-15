import { createSlice } from "@reduxjs/toolkit";

const firstTimeVisitingPage = createSlice({
    name: "firstTimeVisitingPage",
    initialState: { isUserFirstTimeVisit: false },
    reducers: {
        visitPage: () => {
            return { isUserFirstTimeVisit: true };
        }
    }
});

export const { visitPage } = firstTimeVisitingPage.actions;
export default firstTimeVisitingPage.reducer;