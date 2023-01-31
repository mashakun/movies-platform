import React from "react";
import { useDispatch} from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchAuthMe} from './redux/slices/auth';
import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import MainPage from "./MainPage/MainPage";

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
