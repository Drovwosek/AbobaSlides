import React, { useState} from "react";
import styles from "./TopBar.module.css";
import IconAddText from "../../images/addText.svg";
import IconBoldText from "../../images/boldText.svg";
import IconItalicText from "../../images/italicText.svg";
import IconUnderlineText from "../../images/underlineText.svg";
import IconAlignLeftText from "../../images/iconAlignLeftText.svg";
import IconAlignCenterText from "../../images/iconAlignCenterText.svg";
import IconAlignRightText from "../../images/iconAlignRightText.svg";
import store from "../../store/store";
import {
    changeFont,
    changeTextAlignment,
    changeTextBackground,
    changeTextColor,
    changeTextSize,
    changeTextStyle,
    createTextbox
} from "../../store/actionCreators";

export function TextBar() {
    const [font, setFont] = useState()
    const [fontSize, setFontSize] = useState()

    const [boldStyle, setBoldStyle] = useState(false)
    const [italicStyle, setItalicStyle] = useState(false)
    const [underlineStyle, setUnderlineStyle] = useState(false)

    const [color, setColor] = useState('#fff')

    return (
        <div className={styles.textBar}>
            <p className={styles.barName}>Text</p>
            <div className={styles.barActions}>
                <img className={styles.icon} src={IconAddText} alt="" onClick={() => store.dispatch(createTextbox())}/>
                <input type='color' className={styles.icon} value={color} 
                       onChange={event => {
                        setColor(event.target.value)
                           store.dispatch(changeTextColor(event.target.value))
                       }}
                /> 
                <select className={styles.listFonts} value={font} 
                        onChange={event => {
                            setFont(font)
                            store.dispatch(changeFont(event.target.value))
                        }}
                >
                    <option>Times New Roman</option>
                    <option>IBM Plex Suns Condensed</option>
                    <option>Roboto</option>
                </select>
                <select className={styles.listSizeFonts}
                        value={fontSize}
                        onChange={event => {
                            setFontSize(fontSize)
                            store.dispatch(changeTextSize(Number(event.target.value)))
                        }}
                >
                    <option>2</option>
                    <option>4</option>
                    <option>30</option>
                </select>
                <div>
                    <img className={styles.icon} src={IconBoldText} alt=""
                        onClick={() => {
                            store.dispatch(changeTextStyle({bold: !boldStyle, italic: italicStyle, underlined: underlineStyle}))
                            setBoldStyle(!boldStyle)
                        }} 
                    />
                    <img className={styles.icon} src={IconItalicText} alt=""
                        onClick={() => {
                            store.dispatch(changeTextStyle({bold: boldStyle, italic: !italicStyle, underlined: underlineStyle}))
                            setItalicStyle(!italicStyle)                            
                        }} 
                    />
                    <img className={styles.icon} src={IconUnderlineText} alt=""
                     onClick={() => {
                            store.dispatch(changeTextStyle({bold: boldStyle, italic: italicStyle, underlined: !underlineStyle}))
                            setUnderlineStyle(!underlineStyle)
                        }}  
                    />
                </div>
                <div>
                    <img className={styles.icon} src={IconAlignLeftText} alt="" onClick={() => {store.dispatch(changeTextAlignment('left'))}}/>
                    <img className={styles.icon} src={IconAlignCenterText} alt="" onClick={() => {store.dispatch(changeTextAlignment('center'))}}/>
                    <img className={styles.icon} src={IconAlignRightText} alt="" onClick={() => {store.dispatch(changeTextAlignment('right'))}}/>
                </div>
            </div>
        </div>
    )
}