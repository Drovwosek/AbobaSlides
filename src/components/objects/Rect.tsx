import styles from "./Rect.module.css";
import React, {ReactNode, useState, useRef} from "react";
import {Dot} from "./Dot";
import { moveObject, selectObject, unselectObject } from "../../store/actionCreators";
import store from "../../store/store";

type RectProps = {
    x: number | 0,
    y: number | 0,
    width: number,
    height: number,
    selected: boolean,
    objectId: string,
    children?: ReactNode,
}

function Rect(props: RectProps) {
    const [select, setSelect] = useState(false)
    let startX: number
    let startY: number
    let endX
    let endY

    return (
        <div className={styles.rect}  draggable={true} style={{
            left: props.x,
            top: props.y,
            width: props.width,
            height: props.height,
            border: props.selected ? "1px dashed #000" : "",
            resize: 'both',
        }}
        onClick={() => {
            if (select) {
                store.dispatch(unselectObject(props.objectId))
                setSelect(false)
            } else {
                store.dispatch(selectObject(props.objectId))
                setSelect(true)
            }
        }}
        onDragStart={(event) => {
            setSelect(true)
            startX = event.pageX
            startY = event.pageY
        }}
        onDragEnd={(event) => {
            endX = props.x + event.pageX - startX
            endY = props.y + event.pageY - startY
            store.dispatch(moveObject({objectId: props.objectId, x: endX, y: endY}))
        }}
        >
            {props.children}
            <Dot selected={props.selected}
                 type="LeftTop"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
            />
            <Dot selected={props.selected}
                 type="LeftBottom"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
            />
            <Dot selected={props.selected}
                 type="RightTop"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
            />
            <Dot selected={props.selected}
                 type="RightBottom"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
            />
        </div>
    )
}

export {
    Rect,
}

