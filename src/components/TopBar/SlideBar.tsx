import React from "react";
import styles from "./TopBar.module.css";
import IconSetSlideBackgroundColor from "../../images/setBackgroundColor.svg";
import IconSetSlideBackgroundImage from "../../images/setBackgroundImage.svg";

export function SlideBar() {
    return (
        <div className={styles.slideBar}>
            <p className={styles.barName}>Slide</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconSetSlideBackgroundColor} alt="" />
                <img className={styles.icon} src={IconSetSlideBackgroundImage} alt="" />
            </div>
        </div>
    )
}