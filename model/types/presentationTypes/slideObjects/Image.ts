import {ISlideObject, isSlideObject} from "./ISlideObject";


export type Image = ISlideObject & { /*см фигму*/
    opacity: number,
    src: string,
}

function createImage(img: string): Image{
    return {
        id: "8===>",
        width: 100,
        height: 100,
        x: 250,
        y: 250,
        opacity: 100,
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