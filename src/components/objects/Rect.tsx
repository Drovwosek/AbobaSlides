import styles from "./Rect.module.css";
import React, {ReactNode} from "react";
import {Dot} from "./Dot";

type RectProps = {
    x: number | 0,
    y: number | 0,
    width: number,
    height: number,
    selected: boolean,
    children?: ReactNode,
}

function Rect(props: RectProps) {
    return (
        <div className={styles.rect} style={{
            left: props.x,
            top: props.y,
            width: props.width,
            height: props.height,
            border: props.selected ? "1px dashed #000" : "",
        }}
        >
            <Dot selected={props.selected}
                 type="LeftTop"
            />
            <Dot selected={props.selected}
                 type="LeftBottom"
            />
            <Dot selected={props.selected}
                 type="RightTop"
            />
            <Dot selected={props.selected}
                 type="RightBottom"
            />
            {props.children}
        </div>
    )
}

export {
    Rect,
}

