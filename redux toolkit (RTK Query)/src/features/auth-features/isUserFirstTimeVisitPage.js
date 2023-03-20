import { createSlice } from "@reduxjs/toolkit";

const visitPage = createSlice({
    name: "visitPage",
    initialState: { isFirstTImeVisit: true },
    reducers: {
        visitAlready: (state) => {
            return { isFirstTImeVisit: !state.isFirstTImeVisit };
        }
    }
});

export const { visitAlready } = visitPage.actions;
export default visitPage.reducer;