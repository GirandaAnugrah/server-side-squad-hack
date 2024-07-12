import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainSlice, Users } from "../../typings/data";
import { Candidates, Recruiters } from "../../firebase/auth/models/User";

const initialState: MainSlice = {
	initialLoad : false,
	userData: null,
	masterUser: null,
	userNow: "",
};

const mainSlice = createSlice({
	initialState,
	name: "main-stat",
	reducers: {
		setInitialLoading(state, actions: PayloadAction<boolean>){
			state.initialLoad = actions.payload
		},
		setUserData(state, actions: PayloadAction<Recruiters | Candidates | null>){
			state.userData = actions.payload
		},
		setMasterUser(state, actions: PayloadAction<Users | null>){
			state.masterUser = actions.payload
		},
		setUserNow(state, actions: PayloadAction<string>){
			state.userNow = actions.payload
		},
	}
})

export const { setInitialLoading, setUserData, setMasterUser, setUserNow } = mainSlice.actions;

export default mainSlice;