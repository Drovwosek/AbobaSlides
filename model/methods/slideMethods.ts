import {Slide} from "../types/presentationTypes/Slide";
import {ApplicationState} from "../types/Application";

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

function unselectSlide(app: ApplicationState, slide: Slide): ApplicationState {
    /*Сейчас сбрасывает всё выделение со слайдов + объектов
    *  +@ Снять выделение с 1 слайда
    *  +@ Оставить выделение на 1 слайде(выбранном)
    *  -@ Снять выделение со всех слайдов
    * */
    return {
        ...app,
        selection: {
            ...app.selection,
            slideIds: app.selection.slideIds.filter(id => id !== slide.id)
        }
    }
}

function setBackgroundSlide(app: ApplicationState, background: string): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                if (slide.id in app.selection.slideIds) {
                    slide.background = background
                }
            } )
        }
    }
}
