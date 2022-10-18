import {ApplicationState, Presentation, Slide, ISlideObject} from "../types";

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

function deleteSlides(app: ApplicationState, SlideIds: Slide): ApplicationState { //Pablo

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
    /*Выделяю слайд<>
    * Перемещаю его на то место, где будет находиться указатель
    * отпускаю - слайд<> падает на место указателя
    * */
    return {
        ...app
    }
}

function selectSlide(app: ApplicationState, slideId: string): ApplicationState {
    return {
        ...app,
        selection: {
            ...app.selection,
            slideIds: app.selection.slideIds.concat(slideId)
        }
    }
}

function unselectSlide(app: ApplicationState): ApplicationState {
    //спорная хуйня
    /*Сейчас сбрасывает всё выделение со слайдов + объектов
    *  +@ Снять выделение с 1 слайда
    *  +@ Оставить выделение на 1 слайде(выбранном)
    *  -@ Снять выделение со всех слайдов
    * */
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
