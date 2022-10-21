import {isArrayOf} from "../../../core/Array";
import {ISlideObject, isSlideObject} from "./slideObjects/ISlideObject";

export type Slide = {
    id: string,
    objects: Array<ISlideObject>,
    background: string,
}

function isSlide(object: any): object is Slide {
    const hasId = typeof object.id === 'string'
    const hasObjects = isArrayOf<ISlideObject>(object.slides, isSlideObject)
    const hasBackground = typeof object.background == 'string'

    return hasId && hasObjects && hasBackground
}

export {
    isSlide,
}