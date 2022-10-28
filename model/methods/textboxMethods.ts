import {createTextbox, isTextbox, Textbox, TextboxStyle, TextboxAlignment} from "../types/presentationTypes/slideObjects/Textbox";
import {ApplicationState} from "../types/Application";
import {addSlideObject} from "./objectMethods";
import {SelectionData} from "../types/SelectionData";

function addTextbox(app: ApplicationState): ApplicationState {
    return addSlideObject(app, createTextbox())
}

function changeTextColor(app: ApplicationState, selectColor: string): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
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
        selection: newSelection,
    }
}

function changeTextBackground(app: ApplicationState, backgroung: string): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
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
        selection: newSelection,
    }
}

function changeTextSize(app: ApplicationState, size: number): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
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
        selection: newSelection,
    }
}

function changeFont(app: ApplicationState, font: string): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
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
        },
        selection: newSelection,
    }
}

function changeTextStyle(app: ApplicationState, style: TextboxStyle): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
                        return {
                            ...obj,
                            textStyle: style,
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
        selection: newSelection,
    }
}

function changeTextAlignment(app: ApplicationState, alignment: TextboxAlignment): ApplicationState {
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id) && isTextbox(obj)) {
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
        selection: newSelection,
    }
}
