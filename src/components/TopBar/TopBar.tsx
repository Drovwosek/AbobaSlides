import React from "react";
import styles from "./TopBar.module.css";
import Logo from "../../images/logo74.svg"
import { PresentationBar } from "./PresentationBar";
import { SlideBar } from "./SlideBar";
import { TextBar } from "./TextBar";
import { FiguresBar } from "./FiguresBar";
import { ImageBar } from "./ImageBar";

function TopBar() {
    return (
        <div className={styles.topBar}>
            <img src={Logo} alt={'logo'} />
            <PresentationBar />
            <div className={styles.separator}></div>
            <SlideBar />
            <div className={styles.separator}></div>
            <TextBar />
            <div className={styles.separator}></div>
            <FiguresBar />
            <div className={styles.separator}></div>
            <ImageBar />
        </div>
    )
}

export {
    TopBar,
}