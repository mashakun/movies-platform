import React from "react";
import cls from "./EnterForm.module.css";
import icon from "./UserIcon.svg";
import { useNavigate } from 'react-router-dom';

const EnterForm = (props) => {

  const navigate = useNavigate();

  return (
    <form class={cls.EnterForm}>
      <img src={icon} alt="" className={cls.Icon}/>
      <input type="text" required className={cls.LoginInput}></input>
      <input type="text" required className={cls.PasswordInput}></input>
      <button className={cls.EnterButton} onClick={() => navigate("/MainPage")}>ENTER</button>
      <button className={cls.NewButton} onClick={() => navigate("/MainPage")}>NEW</button>
    </form>
  );
};

export default EnterForm;
