import React from "react";
import cls from  "./MainPage.module.css";
import Header from "./Components/Header/Header.jsx"
import SideBar from "./Components/SideBar/SideBar.jsx"
import ListPlace from "./Components/ListPlace/ListPlace.jsx"
import InfoPlace from "./Components/InfoPlace/InfoPlace.jsx";

const MainPage = (props) => {
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
