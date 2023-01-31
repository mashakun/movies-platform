import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsAuth } from "../redux/slices/auth.js";

import cls from  "./MainPage.module.css";
import Header from "./Components/Header/Header.jsx"
import SideBar from "./Components/SideBar/SideBar.jsx"
import ListPlace from "./Components/ListPlace/ListPlace.jsx"
import InfoPlace from "./Components/InfoPlace/InfoPlace.jsx";

const MainPage = (props) => {

  const isAuth = useSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/login"/>
  }

  return (
    <div className={cls.MainPage}>
      <Header />
      <SideBar />
      <ListPlace />
      <InfoPlace />
    </div>
  );
};

export default MainPage;
