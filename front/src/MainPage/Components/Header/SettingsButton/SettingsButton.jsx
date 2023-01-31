import React from "react";
import { useDispatch } from 'react-redux';

import cls from "./SettingsButton.module.css";
import { logout } from "../../../../redux/slices/auth.js";

const SettingsButton = () => {

  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
  };

  return (
    <button className={cls.SettingsButton} onClick={onClickLogout}></button>
  );
};

export default SettingsButton;
