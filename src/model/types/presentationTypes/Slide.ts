import {isArrayOf} from "../../../core/Array";
import {ISlideObject, isSlideObject} from "./slideObjects/ISlideObject";

type ColorBackground = string

type ImageBackground = {
    src: string,
}

function isImageBackground(background: any): background is ImageBackground {
    const hasSrc = typeof background.src === 'string'

    return hasSrc
}

type Slide = {
    id: string,
    objects: Array<ISlideObject>,
    background: ImageBackground | ColorBackground,
}

function isSlide(object: any): object is Slide {
    const hasId = typeof object.id === 'string'
    const hasObjects = isArrayOf<ISlideObject>(object.slides, isSlideObject)
    const hasBackground = typeof object.background == 'string' || isImageBackground(object.background)

    return hasId && hasObjects && hasBackground
}

export type {
    ColorBackground,
    ImageBackground,
    Slide,
}

export {
    isSlide,
}