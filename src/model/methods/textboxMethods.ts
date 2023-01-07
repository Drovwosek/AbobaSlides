import {createTextbox, isTextbox, Textbox, TextboxStyles, TextboxAlignment} from "../types/presentationTypes/slideObjects/Textbox";
import {ApplicationState} from "../types/Application";
import {addSlideObject} from "./objectMethods";
import {SelectionData} from "../types/SelectionData";

function addTextbox(app: ApplicationState): ApplicationState {
    return addSlideObject(app, createTextbox())
}

function changeTextColor(app: ApplicationState, selectColor: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            textColor: selectColor,
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

function changeTextBackground(app: ApplicationState, backgroung: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            backgroundColor: backgroung,
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

function changeTextSize(app: ApplicationState, size: number): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            textSize: size,
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

function changeFont(app: ApplicationState, font: string): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            font: font,
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

function changeTextStyle(app: ApplicationState, styles: TextboxStyles): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            styles: styles,
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

function changeTextAlignment(app: ApplicationState, alignment: TextboxAlignment): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            alignment: alignment,
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
    addTextbox,
    changeTextColor,
    changeTextBackground,
    changeTextSize,
    changeFont,
    changeTextStyle,
    changeTextAlignment,
}