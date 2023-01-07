import { generateId } from "../../../../actions/IdGenerater";
import {ISlideObject, isSlideObject} from "./ISlideObject";


export type Image = ISlideObject & { /*см фигму*/
    opacity: number,
    src: string,
}

function createImage(img: string): Image{
    return {
        id: generateId(),
        width: 100,
        height: 100,
        x: 0,
        y: 0,
        opacity: 1,
        src: img,
    }
}

function isImage(object: any): object is Image {
    const hasOpacity = typeof object.opacity === 'number'
    const hasSRC = typeof object.src === 'string'

    return isSlideObject(object) && hasOpacity && hasSRC
}

export {
    createImage,
    isImage
}