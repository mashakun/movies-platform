import React from "react";
import cls from "./SideBar.module.css"
import ListsButton from "./MenuButtons/ListsButton/ListsButton";
import AddButton from "./MenuButtons/AddButton/AddButton";
import TrashButton from "./MenuButtons/TrashButton/TrashButton";
import ClearButton from "./MenuButtons/ClearButton/ClearButton";
import ShareButton from "./MenuButtons/ShareButton/ShareButton";
import DownloadButton from "./MenuButtons/DownloadButton/DownloadButton";
import RandomButton from "./RandomButton/RandomButton";

const SideBar = () => {
    return (
        <div class={cls.SideBar}>
            <ListsButton />
            <AddButton />
            <TrashButton />
            <ClearButton />
            <RandomButton />
            <ShareButton />
            <DownloadButton />
        </div>
    );
};

export default SideBar;