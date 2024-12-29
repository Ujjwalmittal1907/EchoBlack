import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "", 
};

export const playlistSlice = createSlice({
	name: "playlist",
	initialState,
	reducers: {
		setNewID: (state, action) => {
			state.value = action.payload;
		}
	},
});

export const { setNewID } = playlistSlice.actions;
export default playlistSlice.reducer;
