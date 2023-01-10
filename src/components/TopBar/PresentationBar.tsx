import React from "react";
import styles from "./TopBar.module.css";
import IconExport from "../../images/IconExportPresa.svg";
import IconImport from "../../images/IconImport.svg";
import IconUndo from "../../images/undo.svg";
import IconRedo from "../../images/redo.svg";
import { exportPresentationJson, importPresentationJson } from "../../model/methods/presentationMethods";
import store from "../../store/store";

const exportPresa = () => {
    const json = exportPresentationJson(store.getState());
    const a = document.createElement('a');
    const blob = new Blob([json], {type: 'octet/stream'});
    const url = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = `${store.getState().presentation.name}.json`;
    a.click();
}

export function PresentationBar() {
    return (
        <div className={styles.presentationBar}>
            <p className={styles.barName}>Presentation</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconExport} alt="" onClick={() => {exportPresa()}}/>
                <img className={styles.icon} src={IconImport} alt="" />
                <img className={styles.icon} src={IconUndo} alt=""/>
                <img className={styles.icon} src={IconRedo} alt=""/>
            </div>
        </div>
    )
}