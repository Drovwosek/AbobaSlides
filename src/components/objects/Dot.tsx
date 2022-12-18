import { NONAME } from "dns";
import React from "react";
import styles from "./Dot.module.css";

type DotProps = {
    selected: boolean,
    type: string,
}

function Dot(props: DotProps) {
    let style
    switch (props.type) {
        case "LeftTop":
            style = styles.dotLeftTop;
        case "LeftBottom":
            style = styles.dotLeftBottom;
        case "RightTop":
            style = styles.dotRightTop;
        case "RightBottom":
            style = styles.dotRightBottom;    
        default:
            break;
    }

    return (
        <div className={style}
             style={{
                 display: (props.selected) ? ""  : "none", 
             }}
        >   
        </div>
    )
}

export {
    Dot,
}