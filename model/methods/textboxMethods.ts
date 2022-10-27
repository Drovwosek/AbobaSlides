import {createTextbox, isTextbox, Textbox, TextboxStyle, TextboxAlignment} from "../types/presentationTypes/slideObjects/Textbox";
import {ApplicationState} from "../types/Application";
import {addSlideObject} from "./objectMethods";

function addTextbox(app: ApplicationState): ApplicationState {
    return addSlideObject(app, createTextbox())
}

function changeTextColor(app: ApplicationState, selectColor: string): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.textColor = selectColor
                    }
                })
            })
        }
    }
}

function changeTextBackground(app: ApplicationState, backgroung: string): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.backgroundColor = backgroung
                    }
                })
            })
        }
    }
}

function changeTextSize(app: ApplicationState, size: number): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.textSize = size
                    }
                })
            })
        }
    }
}

function changeFont(app: ApplicationState, font: string): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.font = font
                    }
                })
            })
        }
    }
}

function changeTextStyle(app: ApplicationState, style: TextboxStyle): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.textStyle = style
                    }
                })
            })
        }
    }
}

function changeTextAlignment(app: ApplicationState, alignment: TextboxAlignment): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                slide.objects.map(obj => {
                    if ((obj.id in app.selection.objectIds) && isTextbox(obj)) {
                        obj.alignment = alignment
                    }
                })
            })
        }
    }
}
