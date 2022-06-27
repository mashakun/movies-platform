import React from "react";
import EnterForm from "./EnterForm/EnterForm";
import cls from "./EnterPage.module.css";

const EnterPage = (props) => {
  return (
    <div class={cls.EnterPage}>
      <EnterForm />
    </div>
  );
};

export default EnterPage;
