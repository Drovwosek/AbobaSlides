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
        ...app
    }
}

function moveSlides(app: ApplicationState): ApplicationState {
    /* допишу после проверки addSlides*/
    return {
        ...app
    }
}

function selectSlide(app: ApplicationState): ApplicationState {
    /*обработка события*/
    return {
        ...app
    }
}

function unselectSlide(app: ApplicationState): ApplicationState {
    /*обработка события*/
    return {
        ...app
    }
}

function setBackgroundSlide(app: ApplicationState): ApplicationState {
/*Залупаемся с объектами*/
    return {
        ...app
    }
}
