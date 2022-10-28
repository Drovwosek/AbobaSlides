import {Slide} from "../types/presentationTypes/Slide";
import {ApplicationState} from "../types/Application";
import {SelectionData} from "../types/SelectionData";

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
    /* допишу после проверки addSlides*/
    /*Выделяю слайд<>
    * Перемещаю его на то место, где будет находиться указатель
    * отпускаю - слайд<> падает на место указателя
    * */
    if (app.selection.slideIds.length !== 1) {
        console.error(`Can not move multiple slides`)
        return app
    }

    const selectedSlide = app.presentation.slides.find(slide => slide.id === app.selection.slideIds[0])
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }
    const selectedSlideIndex = app.presentation.slides.indexOf(selectedSlide) + delta

    let slides: Array<Slide> = []
    for (var i = 0; i < app.presentation.slides.length; i++) {
        if (i !== app.presentation.slides.indexOf(selectedSlide)) {
            slides.push(app.presentation.slides[i])
        }
    }

    if (selectedSlideIndex > app.presentation.slides.length) {
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
                if (app.selection.slideIds.includes(slide.id)) {
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
