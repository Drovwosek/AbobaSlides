import {ColorBackground, Slide} from "../types/presentationTypes/Slide";
import {ApplicationState} from "../types/Application";
import {createSelection} from "../types/SelectionData";

function addSlide(app: ApplicationState): ApplicationState { //декларативная хуета
    const newSlide = {
        id: '',
        objects: [],
        background: ''
    }

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides:[
                ...app.presentation.slides,
                newSlide,
            ]
        }
    }
}

function deleteSlides(app: ApplicationState, SlideIds: Slide): ApplicationState {

    return {
        ...app,
        presentation: {
            ...app.presentation,

            slides: app.presentation.slides.slice(0, app.presentation.slides.length - 1)
        }
    }
}

function moveSlides(app: ApplicationState, delta: number): ApplicationState {
    const selectedSlide = app.presentation.slides.find(slide => slide.id === app.selection.slideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }
    const selectedSlideIndex = app.presentation.slides.indexOf(selectedSlide) + delta

    let slides: Array<Slide> = []
    for (let i = 0; i < app.presentation.slides.length; i++) {
        if (i !== app.presentation.slides.indexOf(selectedSlide)) {
            slides.push(app.presentation.slides[i])
        }
    }

    if (selectedSlideIndex > app.presentation.slides.length - 1) {
        slides.push(selectedSlide)
    } else {
        if (selectedSlideIndex < 0) {
            slides.unshift(selectedSlide)
        } else {
            slides.splice(selectedSlideIndex - 1, 0, selectedSlide)
        }
    }

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        }
    }
}

function selectSlide(app: ApplicationState, slide: Slide): ApplicationState {
    return {
        ...app,
        selection: {
            ...app.selection,
            slideId: slide.id,
        }
    }
}

function unselectSlide(app: ApplicationState, slide: Slide): ApplicationState {
    return {
        ...app,
        selection: createSelection(),
    }
}

function setBackgroundSlide(app: ApplicationState, background: ColorBackground): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                if (app.selection.slideId === slide.id) {
                    return {
                        ...slide,
                        background
                    }
                }
                return slide
            } )
        }
    }
}

export {
    addSlide,
    deleteSlides,
    moveSlides,
    selectSlide,
    unselectSlide,
    setBackgroundSlide,
}