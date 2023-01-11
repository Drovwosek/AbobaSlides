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
    const {onDragStart, onDragEnd} = props
    return (
        <div className={styles.dotRightBottom}
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