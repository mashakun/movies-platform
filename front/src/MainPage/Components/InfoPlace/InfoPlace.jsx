import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import cls from "./InfoPlace.module.css"
import List from "./List/List.jsx";

const styleScroll = {
    overflowY: "scroll",
};

const InfoPlace = () => {

    const lists = useSelector((state) => state.lists.lists);

    return (
        <div class={cls.InfoPlace} style={styleScroll}>
            {lists.all.map((el, i) => {
                // console.log(el);
                let chosen = false;
                chosen = (el === lists.curr) ? false : true;
                return <List list={el} key={el.listName} chosen = {chosen}/>
            }
            )}
        </div>
    );
};

export default InfoPlace;