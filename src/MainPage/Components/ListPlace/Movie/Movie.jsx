import React from "react";
import cls from "./Movie.module.css";
import Watched from "./Watched/Watched";
import Heart from "./Heart/Heart.jsx";
import MovieName from "./MovieName/MovieName.jsx";

/*
Что будет когда текста больше?
Пропсы прописать
*/

const Movie = (props) => {
  return (
    <div class={cls.Movie}>
      <div class={cls.left_el}>
        <Watched />
      </div>
      <div class={cls.mid_el}>
        <MovieName movieName={props.movieName} />
      </div>
      <div class={cls.right_el}>
        <Heart />
      </div>
    </div>
  );
};

export default Movie;
