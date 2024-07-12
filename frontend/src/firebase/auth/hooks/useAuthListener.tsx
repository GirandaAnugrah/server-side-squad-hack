import { useState, useEffect } from "react";
import { auth, database } from "../../Firebase"; // Adjust path as per your setup
import { Candidates, Recruiters, Users } from "../models/User";
import { UserRoles } from "../models/UserRoles";
import { useAppDispatch } from "../../../hooks/useRedux";

const useAuthListener = () => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<Recruiters | Candidates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
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
            setUser(finalUser);
          } else {
            throw Error("There is something wrong with the error");
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error.";
          console.error("Error fetching user data:", errorMessage);
          setUser(null); // Reset user state on error
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuthListener;
