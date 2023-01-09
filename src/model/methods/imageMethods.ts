import {ApplicationState} from "../types/Application";
import {createImage, isImage} from "../types/presentationTypes/slideObjects/Image";
import {addSlideObject} from "./objectMethods";

export type ImagePayload = {
    src: string,
    width: number,
    height: number,
}

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
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isImage(obj)) {
                        return {
                            ...obj,
                            opacity: opacity,
                        }
                    }
                    return obj
                })
            }

        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        },
    }
}

export {
    addImage,
    setImageAsBackground,
    changeOpacityImage,
}
