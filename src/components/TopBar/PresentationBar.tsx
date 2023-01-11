import React from "react";
import styles from "./TopBar.module.css";
import IconExport from "../../images/IconExportPresa.svg";
import IconImport from "../../images/IconImport.svg";
import IconUndo from "../../images/undo.svg";
import IconRedo from "../../images/redo.svg";
import { exportPresentationJson, importPresentationJson } from "../../model/methods/presentationMethods";
import store from "../../store/store";
import {goToLastState, goToNextState} from "../../store/actionCreators";
import { importPresentation } from "../../store/actionCreators";
import { createSelection } from "../../model/types/SelectionData";
import jsPDF from "jspdf";
import { exportPDF } from "../../actions/exportPDF";

const exportPresa = () => {
    const json = `data:text/json;chatset=utf-8,${encodeURIComponent(exportPresentationJson(store.getState()))}`;
    console.log(store.getState())
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = json;
    link.download = `${store.getState().presentation.name}.json`;
    link.click();
}

function importPresa() {
    const input = document.createElement("input");
    input.style.display = "none";
    input.type = "file";
    input.onchange = () => {
        if (input.files) {
            const file = input.files[0];
            const filereader = new FileReader();
            filereader.readAsText(file);
            filereader.onload = () => {
                if (typeof filereader.result === "string") {
                    store.dispatch(importPresentation({presentation: JSON.parse(filereader.result), selection: createSelection()}))
                }
            }
        }
    }
    document.body.appendChild(input)
    input.click()
}

export function PresentationBar() {
    return (
        <div className={styles.presentationBar}>
            <p className={styles.barName}>Presentation</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconUndo} alt="" onClick={() => {store.dispatch(goToLastState())}}/>
                <img className={styles.icon} src={IconRedo} alt="" onClick={() => {store.dispatch(goToNextState())}} />
                <img className={styles.icon} src={IconExport} alt=""
                onClick={() => {
                    exportPresa()
                }}/>
                <img className={styles.icon} src={IconImport} alt="" onClick={importPresa}/>
                <img className={styles.icon} src={IconRedo} alt="" onClick={() => {
                    console.log('export')
                    exportPDF()
                }
                }/>
            </div>
        </div>
    )
}