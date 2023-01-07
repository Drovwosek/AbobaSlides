import {addSlideObject} from "./objectMethods";
import {ApplicationState} from "../types/Application";
import {createFigure, FigureType, isFigure} from "../types/presentationTypes/slideObjects/Figure";

function addFigure(app: ApplicationState, figureType: FigureType): ApplicationState {
    return addSlideObject(app, createFigure(figureType))
}

function setFigureColor(app: ApplicationState, color: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isFigure(obj)) {
                        return {
                            ...obj,
                            color: color,
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
        }
    }
}

function setStrokeFigureColor(app: ApplicationState, color: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isFigure(obj)) {
                        return {
                            ...obj,
                            strokeColor: color,
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
        }
    }
}

function changeOpacity(app: ApplicationState, opacity: number): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isFigure(obj)) {
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
        }
    }
}

export {
    addFigure,
    setFigureColor,
    setStrokeFigureColor,
    changeOpacity,
}