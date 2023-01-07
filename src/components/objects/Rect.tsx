import styles from "./Rect.module.css";
import React, {ReactNode, useState} from "react";
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
    return (
        <div className={styles.rect} style={{
            left: props.x,
            top: props.y,
            width: props.width,
            height: props.height,
            border: props.selected ? "1px dashed #000" : "",
        }}
        onClick={() => {
            if (select) {
                store.dispatch(unselectObject(props.objectId))
                setSelect(false)
            } else {
                store.dispatch(selectObject(props.objectId))
                setSelect(true)
            }
            console.log(props.objectId)
            store.getState().selection.objectIds.forEach(id => {console.log(id)})
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

