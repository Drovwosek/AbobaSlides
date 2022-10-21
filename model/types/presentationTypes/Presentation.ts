import {isArrayOf} from "../../../core/Array";
import {isSlide, Slide} from "./Slide";
import {ApplicationState} from "../Application";
import {createEmptySelection} from "../SelectionData";

export type Presentation = {
    name: string,
    slides: Array<Slide>,
}

function isPresentation(object: any): object is Presentation {/*тайпгард смлекция*/
    const hasName = typeof object.name === 'string'
    const hasSlides = isArrayOf<Slide>(object.slides, isSlide)

    return hasName && hasSlides
}

function createPresentation(): ApplicationState {
    return {
        presentation: {
            name : "New presentation",
            slides: [],
        },
        selection: createEmptySelection()
    }
}

export {
    isPresentation,
    createPresentation,
}