import React from "react";
import cls from "./Movie.module.css"

const Movie = () => {
    return (
        <div>
            <label class = {cls.Watched}><input type="checkbox" /></label>
            <item class = {cls.Name}>Inception</item>
            <label class = {cls.Heart}><input type="checkbox" /></label>
        </div>
    );
};

export default Movie;
