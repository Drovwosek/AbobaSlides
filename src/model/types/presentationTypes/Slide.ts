import {isArrayOf} from "../../../core/Array";
import {ISlideObject, isSlideObject} from "./slideObjects/ISlideObject";
import { generateId } from "../../../actions/IdGenerater";

type SlideConfig = {
    id?: string,
    objects?: Array<ISlideObject>,
    background?: ImageBackground | ColorBackground,
}

const defaultSlideConfig: SlideConfig = {
    id: generateId(),
    objects: [],
    background: '#FFF',
}

function createSlide(config: SlideConfig = defaultSlideConfig): Slide {
    return {
        id: config.id || generateId(),
        objects: config.objects || [],
        background: config.background || '#FFF',
    }
}

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
    const hasObjects = isArrayOf<ISlideObject>(object.objects, isSlideObject)
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
    isImageBackground,
    createSlide,
}