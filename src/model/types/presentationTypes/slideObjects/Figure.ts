import {ISlideObject, isSlideObject} from "./ISlideObject";

type FigureType = 'ellipse' | 'triangle' | 'rectangle'

type Figure = ISlideObject & { //I - interface
    color: string,
    strokeColor: string,
    opacity: number,
    type: FigureType,
}

function createFigure(figureType: FigureType): Figure{
    return {
        id: "8===>",
        width: 100,
        height: 100,
        x: 250,
        y: 250,
        color: "#fff",
        strokeColor: "#000",
        opacity: 0,
        type: figureType,
    }
}

function isFigure(object: any): object is Figure {
    const hasColor = typeof object.color === 'string'
    const hasStrokeColor = typeof object.strokeColor === 'string'
    const hasOpacity = typeof object.opacity === 'number'
    const hasType = typeof object.type === 'string'

    return isSlideObject(object) && hasColor && hasStrokeColor && hasOpacity && hasType
}

export type {
    Figure,
    FigureType,
}

export {
    isFigure,
    createFigure,
}