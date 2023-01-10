import React, {MutableRefObject, useState} from "react";
import { useDragAndDrop } from "./DragAndDrop";

type Coords = {
    x: number,
    y: number,
}

export type Size = {
    x: number,
    y: number,
    width: number,
    height: number,
}

interface ViewParams {
    cornerRef: MutableRefObject<HTMLDivElement | null>;
    objectRef: MutableRefObject<HTMLDivElement | null>;
    isSelected: boolean;
    cornerType: string;
}

export function useResize(view: ViewParams, rect: Size, onEnd: Function) {
    const [cornerCoords, setCornerCoords] = useState({x: 0, y: 0});
    const [newRect, setNewRect] = useState({...rect});

    const calcFromLeftTopCorner = (oldRect: Size, delta: Coords): Size => {
        return  {
            x: oldRect.x + delta.x,
            y: oldRect.y + delta.y,
            width: oldRect.width - delta.x,
            height: oldRect.height - delta.y,
        }
    }

    const calcFromLeftBottomCorner = (oldRect: Size, delta: Coords): Size => {
        return  {
            x: oldRect.x + delta.x,
            y: oldRect.y,
            width: oldRect.width - delta.x,
            height: oldRect.height + delta.y,
        }
    }

    const calcFromRightTopCorner = (oldRect: Size, delta: Coords): Size => {
        return  {
            x: oldRect.x,
            y: oldRect.y + delta.y,
            width: oldRect.width + delta.x,
            height: oldRect.height - delta.y,
        }
    }

    const calcFromRightBottomCorner = (oldRect: Size, delta: Coords): Size => {
        return  {
            ...oldRect,
            width: oldRect.width + delta.x,
            height: oldRect.height + delta.y,
        }
    }

    const calculateNewRect = (cornerType: string, oldRect: Size, delta: Coords): Size => {
        if (cornerType === 'LeftTop')
        {
            return calcFromLeftTopCorner(oldRect, delta);
        }
        else if (cornerType === 'LeftBottom')
        {
            return calcFromLeftBottomCorner(oldRect, delta);
        }
        else if (cornerType === 'RightTop')
        {
            return calcFromRightTopCorner(oldRect, delta);
        }
        else if (cornerType === 'RightBottom')
        {
            return calcFromRightBottomCorner(oldRect, delta);
        }
        else
        {
            return oldRect;
        }
    }

    useDragAndDrop({
        coords: cornerCoords,
        setNewCoords: setCornerCoords,
    }, {
        ref: view.cornerRef,
        isSelected: view.isSelected,
        needUpdate: false,
    }, (newX: number, newY: number) => {
        onEnd(calculateNewRect(view.cornerType, rect, {x: newX, y: newY}));
        return;
    })

    React.useLayoutEffect(() => {
        if (view.objectRef.current && view.cornerRef.current) {
            view.objectRef.current.style.left = `${newRect.x}px`;
            view.objectRef.current.style.top = `${newRect.y}px`;
            view.objectRef.current.style.width = `${newRect.width}px`;
            view.objectRef.current.style.height = `${newRect.height}px`;
        }
    }, [newRect, setNewRect]);

    React.useEffect(() => {
        setNewRect(calculateNewRect(view.cornerType, rect, cornerCoords));
    }, [cornerCoords, setCornerCoords]);
}