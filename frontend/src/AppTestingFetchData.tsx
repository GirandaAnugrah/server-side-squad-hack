// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home";
// import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
// import { setInitialLoading } from "./store/main-store/main.slice";
import "./App.css";
import { useFetchCandidatesList } from "./firebase/Candidates/hooks/useFetchCandidatesList";

function App() {

  const { candidates, isLoading, error } = useFetchCandidatesList({
  });

  if (isLoading) {
    return <p>Loading...</p>; // Render a loading indicator while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Render an error message if fetching encounters an error
  }

  return (
    <div className="App">
      <h1>Fetch all Candidates Data</h1>

      {candidates.length > 0 ? (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.uid}>
              <p>Name: {candidate.fullName}</p>
              <p>Email: {candidate.email}</p>
              <p>
                Disabilities:{" "}
                {candidate.deficiencies.map((d: string, index) => (
                  <span key={index}>
                    {d}
                    {index !== candidate.deficiencies.length - 1 && ", "}
                  </span>
                ))}
              </p>
              {/* Render other candidate information as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates found.</p>
      )}

      {/* Additional UI or components can be added here */}
    </div>
  );
}

export default App;
