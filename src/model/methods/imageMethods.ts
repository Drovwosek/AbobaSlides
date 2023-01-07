import {ApplicationState} from "../types/Application";
import {createImage} from "../types/presentationTypes/slideObjects/Image";
import {addSlideObject} from "./objectMethods";


function addImage(app: ApplicationState, src: string): ApplicationState {
    return addSlideObject(app, createImage(src))
}

function setImageAsBackground(app: ApplicationState, src: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                background: {
                    src,
                }
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        }
    }
}

function changeOpacityImage(app: ApplicationState, opacity: number): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                opacity,
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        }
    }
}

export {
    addImage,
    setImageAsBackground,
    changeOpacityImage,
}
