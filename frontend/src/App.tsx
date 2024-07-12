import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import FindPage from "./pages/find/find";
import ProfilePage from "./pages/profile/profile";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { useEffect, useState } from "react";
import { handleInitialLoad } from "./store/main-store/main.action";
import LoadingFallback from "./components/LoadingFallback";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/register";
import useAuthListener from "./firebase/auth/hooks/useAuthListener";
import { auth } from "./firebase/Firebase";

function App() {
  const dispatch = useAppDispatch();
  const { initialLoad, userData } = useAppSelector((state) => state.main);
  // const { user, loading } = useAuthListener();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  useEffect(() => {
    dispatch(handleInitialLoad());
  }, [dispatch]);

  useEffect(() => {
    console.log("USER DATA: ", userData);
  }, [userData]);

  useEffect(() => {
    console.log("LOADING: ", initialLoad);
  }, [initialLoad]);

  if (initialLoad) return <LoadingFallback />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
