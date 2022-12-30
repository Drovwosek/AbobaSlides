import React from "react";
import styles from "./TopBar.module.css";
import IconAddText from "../../images/addText.svg";
import IconBoldText from "../../images/boldText.svg";
import IconItalicText from "../../images/italicText.svg";
import IconUnderlineText from "../../images/underlineText.svg";
import IconAlignLeftText from "../../images/iconAlignLeftText.svg";
import IconAlignCenterText from "../../images/iconAlignCenterText.svg";
import IconAlignRightText from "../../images/iconAlignRightText.svg";

export function TextBar() {
    return (
        <div className={styles.textBar}>
            <p className={styles.barName}>Text</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconAddText} alt="" />
                <select className={styles.listFonts}>
                    <option>Times New Roman</option>
                    <option>IBM Plex Suns Condensed</option>
                    <option>Roboto</option>
                </select>
                <select className={styles.listSizeFonts}>
                    <option>2</option>
                    <option>4</option>
                    <option>30</option>
                </select>
                <img className={styles.icon} src={IconBoldText} alt="" />
                <img className={styles.icon} src={IconItalicText} alt="" />
                <img className={styles.icon} src={IconUnderlineText} alt="" />
                <img className={styles.icon} src={IconAlignLeftText} alt="" />
                <img className={styles.icon} src={IconAlignCenterText} alt="" />
                <img className={styles.icon} src={IconAlignRightText} alt="" />
            </div>
        </div>
    )
}