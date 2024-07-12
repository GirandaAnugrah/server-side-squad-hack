import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainSlice, Users } from "../../typings/data";
import { Candidates, Recruiters } from "../../firebase/auth/models/User";

const initialState: MainSlice = {
	initialLoad : false,
	userData: null,
	masterUser: null,
	userNow: "",
	errorAlert: null,
	dataCandidates: [],
	detailCandidates: null,
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
		setErrorAlert(state, actions: PayloadAction<string | null>){
			state.errorAlert = actions.payload
		},
		setDataCandidates(state, actions: PayloadAction<Candidates[]>){
			state.dataCandidates = actions.payload
		},
		setDetailCandidate(state, actions: PayloadAction<Candidates | null>){
			state.detailCandidates = actions.payload
		},
	}
})

export const { setInitialLoading, setUserData, setMasterUser, setUserNow, setErrorAlert, setDataCandidates, setDetailCandidate } = mainSlice.actions;

export default mainSlice;