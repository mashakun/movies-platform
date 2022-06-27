import React from "react";
import cls from "./MovieButton.module.css";

const MovieButton = () => {
  return (
    <div className={cls.button_place}>
      <button className={cls.MovieButton}></button>
    </div>
  );
};

export default MovieButton;
