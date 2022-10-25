import {isArrayOf} from "../../../core/Array";
import {isSlide, Slide} from "./Slide";
import {ApplicationState} from "../Application";
import {createSelection} from "../SelectionData";

export type Presentation = {
    name: string,
    slides: Array<Slide>,
}

function isPresentation(object: any): object is Presentation {/*тайпгард смлекция*/
    const hasName = typeof object.name === 'string'
    const hasSlides = isArrayOf<Slide>(object.slides, isSlide)

    return hasName && hasSlides
}

type PresentationConfig = {
    name: string;
}
const defaultConfig: PresentationConfig = {
    name: "New Presentation",
}
function createPresentation(config: PresentationConfig = defaultConfig): ApplicationState {
    return {
        presentation: {
            name: config.name,
            slides: [],
        },
        selection: createSelection()
    }
}

export {
    isPresentation,
    createPresentation,
}