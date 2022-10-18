import {ApplicationState, Presentation, Slide, SlideObject} from "../types";
import {newPresentation, newSlide, newCircle, newRectangle, newTextbox, newTriangle} from "../consts";

function addSlide(app: ApplicationState): ApplicationState { //декларативная хуета
     newSlide

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

function deleteSlides(app: ApplicationState, SlideIds: Slide): ApplicationState { //
    /* допишу после проверки addSlides*/
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.slice(0, app.presentation.slides.length - 1)
        }
    }
}

function moveSlides(app: ApplicationState): ApplicationState {
    /* допишу после проверки addSlides*/
    return {
        ...app
    }
}

function selectSlide(app: ApplicationState, slideId: string): ApplicationState {
    /*обработка события*/
    return {
        ...app,
        selection: {
            ...app.selection,
            slideIds: app.selection.slideIds.concat(slideId)
        }
    }
}

function unselectSlide(app: ApplicationState): ApplicationState {
    /*обработка события*/
    //спорная хуйня
    return {
        ...app,
        selection: {
            ...app.selection,
            slideIds: [],
            objectIds: [],
        }
    }
}

function setBackgroundSlide(app: ApplicationState): ApplicationState {
/*Залупаемся с объектами*/
    return {
        ...app
    }
}
