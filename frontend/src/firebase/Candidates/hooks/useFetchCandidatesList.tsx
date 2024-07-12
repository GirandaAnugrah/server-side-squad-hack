import { useEffect, useState } from "react";
import { database } from "../../Firebase"
import { UserRoles } from "../../auth/models/UserRoles";
import { Candidates } from "../../auth/models/User";

export const useFetchCandidatesList = (filters?: { [key: Candidates]: any }) => {
    const [candidates, setCandidates] = useState<Candidates[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCandidates = async () => {
            setIsLoading(true);
            try {
                let query = database.ref("users").orderByChild('role').equalTo(UserRoles.CANDIDATES);

                const snapshot = await query.once('value');

                const candidatesList: Candidates[] = [];

                snapshot.forEach((childSnapshot) => {
                    candidatesList.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                if (filters && Object.keys(filters).length > 0) {
                    const filteredCandidates = candidatesList.filter(candidate => {
                        return Object.keys(filters).every(key => {
                            const candidateValue = candidate[key.toLowerCase()];
                            const filterValue = filters[key];
                            console.log(filterValue);
                            if (Array.isArray(filterValue)) {
                                console.log("EXIST!");
                                return filterValue.every((value: string) =>
                                    candidateValue.includes(value)
                                );
                            } else {
                                // Regular attribute filtering
                                return candidate[key.toLowerCase()] === filterValue;
                            }
                        });
                    });
                    setCandidates(filteredCandidates);
                } else {
                    // No filters provided, set all candidates
                    setCandidates(candidatesList);
                }

            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error.';
                console.error('Error fetching user data:', errorMessage);
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCandidates(); // Call fetchCandidates function immediately when the component mounts

    }, []); // Empty dependency array ensures the effect runs once on component mount

    return { candidates, isLoading, error };
};