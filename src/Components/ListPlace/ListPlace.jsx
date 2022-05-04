import React from "react";
import cls from "./ListPlace.module.css"
import Movie from "./Movie/Movie";

const ListPlace = () => {
    return (
        <div class={cls.ListPlace}>
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </div>
    );
};

export default ListPlace;
