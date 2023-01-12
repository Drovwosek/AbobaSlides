import styles from "./Rect.module.css";
import React, {ReactNode, useState, useRef} from "react";
import {Dot} from "./Dot";
import {moveObject, resizeObject, selectObject, unselectObject} from "../../store/actionCreators";
import store from "../../store/store";
import {DragEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import dragStart = Simulate.dragStart;
import dragEnd = Simulate.dragEnd;

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
    const isResizing = useRef(false)
    let startX: number
    let startY: number
    let endX
    let endY

    let startSizeX: number
    let startSizeY: number

    function startDrag(event: DragEvent<HTMLDivElement>) {
        if (isResizing.current) {
            return
        }
        setSelect(true)
        startX = event.pageX
        startY = event.pageY
    }

    function endDrag(event: DragEvent<HTMLDivElement>) {
        if (isResizing.current) {
            return
        }
        endX = props.x + event.pageX - startX
        endY = props.y + event.pageY - startY
        console.log('move')
        store.dispatch(moveObject({objectId: props.objectId, x: endX, y: endY}))
    }

    function startResizeRightBottom(event: DragEvent<HTMLDivElement>) {
        isResizing.current = true
        startSizeX = event.pageX
        startSizeY = event.pageY
    }

    function endResizeRightBottom(event: DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        store.dispatch(resizeObject({width: props.width + event.pageX - startSizeX, height: props.height + event.pageY - startSizeY}))
        isResizing.current = false
    }

    function startResizeRightTop(event: DragEvent<HTMLDivElement>) {
        isResizing.current = true
        startSizeX = event.pageX
        startSizeY = event.pageY
    }

    function endResizeRightTop(event: DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        store.dispatch(moveObject({objectId: props.objectId, x: props.x, y: props.y - startSizeY + event.pageY}))
        store.dispatch(resizeObject({width: props.width + event.pageX - startSizeX, height: props.height - event.pageY + startSizeY}))
        isResizing.current = false
    }

    function startResizeLeftTop(event: DragEvent<HTMLDivElement>) {
        isResizing.current = true
        startSizeX = event.pageX
        startSizeY = event.pageY
    }

    function endResizeLeftTop(event: DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        store.dispatch(moveObject({objectId: props.objectId, x: props.x - startSizeX + event.pageX, y: props.y - startSizeY + event.pageY}))
        store.dispatch(resizeObject({width: props.width - event.pageX + startSizeX, height: props.height - event.pageY + startSizeY}))
        isResizing.current = false
    }

    function startResizeLeftBottom(event: DragEvent<HTMLDivElement>) {
        isResizing.current = true
        startSizeX = event.pageX
        startSizeY = event.pageY
    }

    function endResizeLeftBottom(event: DragEvent<HTMLDivElement>) {
        event.stopPropagation()
        store.dispatch(moveObject({objectId: props.objectId, x: props.x - startSizeX + event.pageX, y: props.y}))
        store.dispatch(resizeObject({width: props.width - event.pageX + startSizeX, height: props.height + event.pageY - startSizeY}))
        isResizing.current = false
    }


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
            if (select) {
                startDrag(event)
            }
        }}
        onDragEnd={(event) => {
            if (select) {
                endDrag(event)
            }
        }}
        >
            {props.children}
            <Dot selected={props.selected}
                 type="RightBottom"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
                 onDragStart={startResizeRightBottom}
                 onDragEnd={endResizeRightBottom}
            />
            <Dot selected={props.selected}
                 type="RightTop"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
                 onDragStart={startResizeRightTop}
                 onDragEnd={endResizeRightTop}
            />
            <Dot selected={props.selected}
                 type="LeftTop"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
                 onDragStart={startResizeLeftTop}
                 onDragEnd={endResizeLeftTop}
            />
            <Dot selected={props.selected}
                 type="LeftBottom"
                 x={props.x}
                 y={props.y}
                 width={props.width}
                 height={props.height}
                 objectId={props.objectId}
                 onDragStart={startResizeLeftBottom}
                 onDragEnd={endResizeLeftBottom}
            />
        </div>
    )
}

export {
    Rect,
}

