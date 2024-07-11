import { useReducer } from "react";
import { userViewModel } from "../models/UserViewModel";
import { auth, database } from "../../Firebase"
import { Candidates, Recruiters, Users } from "../models/User";
import { UserRoles } from "../models/UserRoles";

const REGISTER_STATUS = {
    SUCCESS: 'REGISTER_SUCCESS',
    FAILURE: 'REGISTER_FAILURE',
    PENDING: 'REGISTER_PENDING',
};

const initialState: userViewModel = {
    loading: false,
    user: null,
    error: null,
};

const reducer = (state: userViewModel, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case REGISTER_STATUS.PENDING:
            return { ...state, loading: true, error: null };
        case REGISTER_STATUS.SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case REGISTER_STATUS.FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const useRegister = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const register = async (user: Recruiters | Candidates) => {
        dispatch({ type: REGISTER_STATUS.PENDING });
        try {
            const credentials = await auth.createUserWithEmailAndPassword(user.email, user.password);

            if (!credentials.user || !credentials.user.uid) {
                throw new Error('User UID is null or undefined');
            }

            switch (user.role) {
                case UserRoles.RECRUITERS:
                    user = {
                        ...user,
                        role: UserRoles.RECRUITERS,
                    } as Recruiters;
                    break;
                case UserRoles.CANDIDATES:
                    user = {
                        ...user,
                        role: UserRoles.CANDIDATES,
                    } as Candidates;
                    break;
                default:
                    throw new Error('Unknown user role.');
            }

            await database.ref(`users/` + credentials.user.uid).set({
                ...user,
            });

            dispatch({ type: REGISTER_STATUS.SUCCESS, payload: credentials.user });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error.";
            dispatch({ type: REGISTER_STATUS.FAILURE, payload: errorMessage });
        }
    };
    return { ...state, register };
};

export default useRegister;