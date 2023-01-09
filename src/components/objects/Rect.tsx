import styles from "./Rect.module.css";
import React, {ReactNode, useState, useRef} from "react";
import {Dot} from "./Dot";
import { moveObject, selectObject, unselectObject } from "../../store/actionCreators";
import store from "../../store/store";
import { useDragAndDrop } from "../../actions/DragAndDrop";

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
    const [rectCoords, setRectCoords] = useState({x: props.x, y: props.y});
    const rectRef =  useRef<HTMLDivElement>(null);

    useDragAndDrop({
        coords: rectCoords,
        setNewCoords: setRectCoords,
    }, {
        ref: rectRef,
        isSelected: props.selected,
        needUpdate: true,
    },
    (newX: number, newY: number) => {
        store.dispatch(moveObject({x: newX, y: newY}))
    });

    return (
        <div className={styles.rect}  draggable={false} style={{
            left: props.x,
            top: props.y,
            width: props.width,
            height: props.height,
            border: props.selected ? "1px dashed #000" : "",
        }}
        ref={rectRef}
        onClick={() => {
            if (select) {
                store.dispatch(unselectObject(props.objectId))
                setSelect(false)
            } else {
                store.dispatch(selectObject(props.objectId))
                setSelect(true)
            }
        }}
        onDragStart={() => setSelect(true)}
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

