import React, { useState } from "react";
import styles from "./TopBar.module.css";
import IconAddRectangle from "../../images/addRectangle.svg";
import IconAddTriangle from "../../images/addTriangle.svg";
import IconAddEllipse from "../../images/addEllipse.svg";
import store from "../../store/store";
import { changeOpacity, createFigure, setColorFigure } from "../../store/actionCreators";

export function FiguresBar() {
    const [color, setColor] = useState('#fff')
    const [opacity, setOpacity] = useState('100')

    return (
        <div className={styles.figuresBar}>
            <p className={styles.barName}>Figures</p>
            <div className={styles.barActions}>
                <div>
                    <img className={styles.icon} src={IconAddRectangle} alt="" onClick={() => {store.dispatch(createFigure('rectangle'))}}/>
                    <img className={styles.icon} src={IconAddEllipse} alt="" onClick={() => {store.dispatch(createFigure('ellipse'))}}/>
                    <img className={styles.icon} src={IconAddTriangle} alt="" onClick={() => {store.dispatch(createFigure('triangle'))}}/>
                </div>
                <input className={styles.icon} type="color" value={color}
                       onChange={event => {
                           setColor(event.target.value)
                           store.dispatch(setColorFigure(event.target.value))
                       }}
                />
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