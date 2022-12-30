import React from "react";
import styles from "./TopBar.module.css";
import IconAddRectangle from "../../images/addRectangle.svg";
import IconAddTriangle from "../../images/addTriangle.svg";
import IconAddEllipse from "../../images/addEllipse.svg";

export function FiguresBar() {
    return (
        <div className={styles.figuresBar}>
            <p className={styles.barName}>Figures</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconAddRectangle} alt="" />
                <img className={styles.icon} src={IconAddTriangle} alt="" />
                <img className={styles.icon} src={IconAddEllipse} alt="" />
                <input className={styles.icon} type="color" />
            </div>
        </div>
    )
}