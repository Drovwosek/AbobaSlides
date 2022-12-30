import React from "react";
import styles from "./TopBar.module.css";
import IconExport from "../../images/IconExportPresa.svg";
import IconImport from "../../images/IconImport.svg";
import IconUndo from "../../images/undo.svg";
import IconRedo from "../../images/redo.svg";

export function PresentationBar() {
    return (
        <div className={styles.presentationBar}>
            <p className={styles.barName}>Presentation</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconExport} alt=""/>
                <img className={styles.icon} src={IconImport} alt=""/>
                <img className={styles.icon} src={IconUndo} alt=""/>
                <img className={styles.icon} src={IconRedo} alt=""/>
            </div>
        </div>
    )
}