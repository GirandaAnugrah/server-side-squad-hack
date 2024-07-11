import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainSlice } from "../../typings/data";

const initialState: MainSlice = {
	initialLoad : false,
};

const mainSlice = createSlice({
	initialState,
	name: "main-stat",
	reducers: {
		setInitialLoading(state, actions: PayloadAction<boolean>){
			state.initialLoad = actions.payload
		}
	}
})

export const { setInitialLoading } = mainSlice.actions;

export default mainSlice;