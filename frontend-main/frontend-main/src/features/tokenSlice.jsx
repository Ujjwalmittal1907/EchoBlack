import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
};

export const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setNewToken: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setNewToken } = tokenSlice.actions;
export default tokenSlice.reducer;
