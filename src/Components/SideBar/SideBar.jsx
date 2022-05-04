import React from "react";
import cls from "./SideBar.module.css"
import MenuButton from "./MenuButton/MenuButton";
import RandomButton from "./RandomButton/RandomButton";

const SideBar = () => {
    return (
        <div class={cls.SideBar}>
            <MenuButton />
            <MenuButton />
            <MenuButton />
            <MenuButton />
            <MenuButton />
            <MenuButton />
            <RandomButton />
        </div>
    );
};

export default SideBar;