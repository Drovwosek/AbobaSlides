import {ApplicationState, Presentation, Slide} from "../types";

function addSlide(app: ApplicationState): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.slice(-1)
        }
    }
}

function deleteSlides(app: ApplicationState, Slide: Slide): ApplicationState { //
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
