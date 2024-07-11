import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { useState } from "react";
import { handleInitialLoad } from "./store/main-store/main.action";
import LoadingFallback from "./components/LoadingFallback";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  const dispatch = useAppDispatch();
  const { initialLoad } = useAppSelector((state) => state.main);

  useState(() => {
    dispatch(handleInitialLoad());
  }, [dispatch]);

  if (initialLoad) return <LoadingFallback />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
