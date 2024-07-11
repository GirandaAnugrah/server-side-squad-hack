import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { useState } from "react";
import { setInitialLoading } from "./store/main-store/main.slice";
// import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { initialLoad } = useAppSelector((state) => state.main);

  useState(() => {
    dispatch(setInitialLoading());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
