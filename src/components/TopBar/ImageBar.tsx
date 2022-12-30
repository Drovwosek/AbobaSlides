import React from "react";
import styles from "./TopBar.module.css";
import IconAddImage from "../../images/addImage.svg";

export function ImageBar() {
    return (
        <div className={styles.imageBar}>
            <p className={styles.barName}>Image</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconAddImage} alt="" />
            </div>
        </div>
    )
}