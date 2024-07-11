// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home";
// import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
// import { useState } from "react";
// import { setInitialLoading } from "./store/main-store/main.slice";
import "./App.css";
import useAuthListener from "./firebase/auth/hooks/useAuthListener";
import { auth } from "./firebase/Firebase";
import LoginForm from "./firebase/LoginAuthExample";
import RegisterForm from "./firebase/RegisterAuthExample";

function App() {
  const { user, loading } = useAuthListener();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };


  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <h1>Firebase Authentication Test</h1>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <p>Full name: {user.fullName}</p>
            <p>email: {user.email}</p>
            <p>phone Number: {user.phoneNumber}</p>
            <p>birthdate: {user.birthdate.toString()}</p>
            <p>Status: {user.gender ? 'Male' : 'Female'}</p>
            <p>Province: {user.province} </p>
            <p>District: {user.district} </p>
            <p>Street: {user.street}</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>
              Logout
            </button>

            {user && <p>User roles: {user.role}</p>}
          </div>
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}

export default App;
