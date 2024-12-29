import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../features/tokenSlice";
import playlistSlice from "../features/playlistSlice";
import tracksStatus from "../features/tracksStatus";

export const store = configureStore({
    reducer: {
        token: tokenSlice,
        playlist: playlistSlice,
        tracksStatus: tracksStatus
    }
})