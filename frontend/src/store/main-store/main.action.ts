import useLogin from "../../firebase/auth/hooks/useLogin";
import { Candidates, Recruiters } from "../../firebase/auth/models/User";
import { UserRoles } from "../../firebase/auth/models/UserRoles";
import { auth, database } from "../../firebase/Firebase";
import LoginForm from "../../firebase/LoginAuthExample";
import { Users } from "../../typings/data";
import { ThunkActionType } from "../../typings/redux";
import { setDataCandidates, setInitialLoading, setMasterUser, setUserData } from "./main.slice";

export const handleLogin =
  ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): ThunkActionType<void> =>
  async (dispatch) => {
    try {
      dispatch(setInitialLoading(true));
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      dispatch(setInitialLoading(false));
    }
  };

export const handleRegister =
  ({ user }: { user: Candidates | Recruiters }): ThunkActionType<void> =>
  async (dispatch) => {
    try {
      dispatch(setInitialLoading(true));
      const credentials = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      if (!credentials.user || !credentials.user.uid) {
        throw new Error("User UID is null or undefined");
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
          throw new Error("Unknown user role.");
      }

      await database.ref(`users/` + credentials.user.uid).set({
        ...user,
      });

    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error.";
    }finally {
      dispatch(setInitialLoading(false));
    }
  };

export const getAllDataUser =
  (): ThunkActionType<void> => async (dispatch) => {
    try {
      // dispatch(setInitialLoading(true));
      let query = database.ref("users").orderByChild('role').equalTo(UserRoles.CANDIDATES);

      const snapshot = await query.once('value');

      const candidatesList: Candidates[] = [];

      snapshot.forEach((childSnapshot) => {
          candidatesList.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          });
      });
      dispatch(setDataCandidates(candidatesList));
      console.log("CANDIDATE LIST: ", candidatesList) 
    } catch (error) {
      console.log((error as Error).message)
    } finally {
      // dispatch(setInitialLoading(false));
    }
  }
export const handleInitialLoad =
  (): ThunkActionType<void> => async (dispatch) => {
    dispatch(setInitialLoading(true));
    try {
      auth.onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
          const userDataRef = database.ref(`users/${firebaseUser.uid}`);
          try {
            const snapshot = await userDataRef.once("value");
            const userData = snapshot.val();
            if (userData) {
              let finalUser: Recruiters | Candidates | null = null;
              switch (userData.role) {
                case UserRoles.RECRUITERS:
                  finalUser = {
                    ...userData,
                    role: UserRoles.RECRUITERS,
                  } as Recruiters;
                  break;
                case UserRoles.CANDIDATES:
                  finalUser = {
                    ...userData,
                    role: UserRoles.CANDIDATES,
                  } as Candidates;
                  break;
                default:
                  throw new Error("Unknown user role.");
              }
              dispatch(setUserData(finalUser));
            } else {
              throw Error("There is something wrong with the error");
            }
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : "Unknown error.";
            console.error("Error fetching user data:", errorMessage);
            dispatch(setUserData(null));
          }
        } else {
          dispatch(setUserData(null));
        }
      });
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      dispatch(setInitialLoading(false));
    }
  };
