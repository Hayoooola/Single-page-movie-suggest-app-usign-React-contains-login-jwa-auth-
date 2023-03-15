import { createAction, createReducer } from "@reduxjs/toolkit";

export const firstTimeVisitingPageRequest = createAction("firstTimeVisit", () => {
    return { payload: true };
});

const firstTimeVisitingPageReducer = createReducer({ isUserFirstTimeVisit: false }, (builder) => {
    builder.addCase("firstTimeVisit", (state, action) => {
        return action.payload ? { isUserFirstTimeVisit: true } : { isUserFirstTimeVisit: true };
    });
});

export default firstTimeVisitingPageReducer;