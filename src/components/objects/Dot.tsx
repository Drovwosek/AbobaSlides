import styles from "./Dot.module.css";
import {DragEventHandler} from "react";

type DotProps = {
    selected: boolean,
    type: string,
    x: number,
    y: number,
    width: number,
    height: number,
    objectId: string,
    onDragStart: DragEventHandler<HTMLDivElement>,
    onDragEnd: DragEventHandler<HTMLDivElement>,
}

function Dot(props: DotProps) {
    let style
    const {onDragStart, onDragEnd} = props

    switch (props.type) {
        case "RightBottom":
            style = styles.dotRightBottom
            break
        case "RightTop":
            style = styles.dotRightTop
            break
        case "LeftTop":
            style = styles.dotLeftTop
            break
        case "LeftBottom":
            style = styles.dotLeftBottom
            break
    }

    return (
        <div className={style}
             draggable={true}
             style={{
                 display: (props.selected) ? ""  : "none", 
             }}
             onDragStart={onDragStart}
             onDragEnd={onDragEnd}
        >   
        </div>
    )
}

export {
    Dot,
}