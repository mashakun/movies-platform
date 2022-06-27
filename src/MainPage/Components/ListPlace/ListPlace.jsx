import React from "react";
import cls from "./ListPlace.module.css"
import Movie from "./Movie/Movie";
import MovieButton from "./MovieButton/MovieButton";

const styleScroll = {
    overflowY : "scroll"
}

const ListPlace = () => {
    return (
        <div class={cls.ListPlace} style={styleScroll}>
            <Movie movieName = "Inception"/>
            <Movie movieName = "Pirates of the Carribean"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <Movie movieName = "Don't look up"/>
            <MovieButton />
        </div>
    );
};

export default ListPlace;
