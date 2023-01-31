import React from "react";
import { useSelector } from 'react-redux';

import cls from "./ListPlace.module.css";
import Movie from "./Movie/Movie";
import MovieButton from "./MovieButton/MovieButton";

const styleScroll = {
  overflowY: "scroll",
};


const ListPlace = () => {

  const items = useSelector((state) => state.lists.items);
  const currList = useSelector((state) => state.lists.lists.curr);
  // console.log("currlist: ", currList._id);

  if (currList) {

    return (
      <div class={cls.ListPlace} style={styleScroll}>
        {items.all.map((el, i) => {
          return <Movie id={i} movieName={el.movieName}
            heart={el.heart} key={el.movieName + el.heart} />
        })}
        <MovieButton listId={currList._id}/>
      </div>
    );
  } else {
    return (
      <div class={cls.ListPlace} style={styleScroll}></div>
    );
  }
};

export default ListPlace;
