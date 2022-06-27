import React from "react";
import "./App.css";
import EnterPage from "./EnterPage/EnterPage";
import MainPage from "./MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
