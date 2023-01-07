import React, {useState} from "react";
import styles from "./TopBar.module.css";
import IconAddImage from "../../images/addImage.svg";
import store from "../../store/store";
import { changeOpacity, createImage } from "../../store/actionCreators";
import { loadImageFromDisk, imageUrlToBase64 } from "../../core/ImageLoader";

export function ImageBar() {
    const [opacity, setOpacity] = useState('100')

    return (
        <div className={styles.imageBar}>
            <p className={styles.barName}>Image</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconAddImage} alt="" onClick={() => {}}/>
                <select className={styles.listOpacity} value={opacity}
                        onChange={event => {
                            setOpacity(event.target.value)
                            store.dispatch(changeOpacity(Number(event.target.value)/100))
                        }}
                >
                    <option>0</option>
                    <option>50</option>
                    <option>100</option>
                </select>
            </div>
        </div>
    )
}