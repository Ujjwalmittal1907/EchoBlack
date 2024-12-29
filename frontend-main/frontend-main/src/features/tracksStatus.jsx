import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const trackStatus = createSlice({
	name: "trackStatus",
	initialState,
	reducers: {
		setNewStat: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setNewStat } = trackStatus.actions;
export default trackStatus.reducer;
