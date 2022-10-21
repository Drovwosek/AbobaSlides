import {ISlideObject, isSlideObject} from "./ISlideObject";

export type Image = ISlideObject & { /*см фигму*/
    opacity: number,
    src: string,
}

function isImage(object: any): object is Image {
    const hasOpacity = typeof object.opacity === 'number'
    const hasSRC = typeof object.src === 'string'

    return isSlideObject(object) && hasOpacity && hasSRC
}

export {
    isImage
}