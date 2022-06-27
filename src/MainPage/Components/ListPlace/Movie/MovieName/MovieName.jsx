import React from "react";
import cls from "./MovieName.module.css";

const MovieName = (props) => {
  return (
      <div className={cls.Name}>{props.movieName}</div>
  );
};

export default MovieName;
