import { userViewModel } from "../models/UserViewModel";
import { auth, database } from "../../Firebase"
import { Users } from "../models/User";
import { useReducer } from "react";

const LOGIN_STATUS = {
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE',
    PENDING: 'LOGIN_PENDING',
};

const initialState: userViewModel = {
    loading: false,
    user: null,
    error: null,
};

const reducer = (state: userViewModel, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case LOGIN_STATUS.PENDING:
            return { ...state, loading: true, error: null };
        case LOGIN_STATUS.SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case LOGIN_STATUS.FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const useLogin = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (email: string, password: string) => {
        dispatch({ type: LOGIN_STATUS.PENDING });
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            dispatch({ type: LOGIN_STATUS.SUCCESS, payload: userCredential.user });
            return userCredential.user;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
            dispatch({ type: LOGIN_STATUS.FAILURE, payload: errorMessage });
            throw error;
        }
    };

    return { ...state, login };
};

export default useLogin;
