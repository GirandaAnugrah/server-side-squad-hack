import { ThunkActionType } from "../../typings/redux";
import { setInitialLoading } from "./main.slice";

export const handleInitialLoad = (): ThunkActionType<void> => async (dispatch, getState) => {
	try {
		const {initialLoad} = getState().main;
		dispatch(setInitialLoading(true));
		console.log("INITIAL LOAD AJA", initialLoad);
	} catch (error) {
		console.log((error as Error).message);
	}finally {
		dispatch(setInitialLoading(false));
	}
}
