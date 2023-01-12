import React, { useState } from "react";
import styles from "./TopBar.module.css";
import IconSetSlideBackgroundColor from "../../images/setBackgroundColor.svg";
import IconSetSlideBackgroundImage from "../../images/setBackgroundImage.svg";
import store from "../../store/store";
import { setBackgroundSlide } from "../../store/actionCreators";

function getSlideColor(): string {
    let color: string = '#fff'
    let selectionSlide = store.getState().presentation.slides.find(slide => slide.id === store.getState().selection.slideId)
    if (selectionSlide) {
        if (typeof selectionSlide.background === 'string') {
            color = selectionSlide.background
        }
    }
    return color
}

export function SlideBar() {
    const [color, setColor] = useState(getSlideColor())

    return (
        <div className={styles.slideBar}>
            <p className={styles.barName}>Slide</p>
            <div className={styles.SlideBarActions}>
                <input 
                    value={color}
                    type="color"
                    className={styles.icon}
                    onChange={event => {
                        setColor(event.target.value)
                        store.dispatch(setBackgroundSlide(`${event.target.value}`))
                    }}/>
            </div>
        </div>
    )
}