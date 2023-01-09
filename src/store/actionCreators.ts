import { ColorBackground, ImageBackground } from "../model/types/presentationTypes/Slide";
import { ADD_SLIDE, CHANGE_FONT, CHANGE_OPACITY, CHANGE_OPACITY_IMAGE, CHANGE_PRESENTATION_TITLE, CHANGE_TEXT_ALIGNMENT, CHANGE_TEXT_BACKGROUND, CHANGE_TEXT_COLOR, CHANGE_TEXT_SIZE, CHANGE_TEXT_STYLE, CREATE_FIGURE, CREATE_IMAGE, CREATE_SLIDE, CREATE_TEXTBOX, DELETE_OBJECT, DELETE_SLIDE, MOVE_OBJECT, MOVE_SLIDE, RESIZE_OBJECT, SELECT_OBJECT, SELECT_SLIDE, SET_BACKGROUND_SLIDE, SET_COLOR_FIGURE, SET_STROKECOLOR_FIGURE, UNSELECT_SLIDE, UNSELECT_OBJECT, SET_IMAGE_BACKGROUND, SET_TEXT } from "./actions";
import { Slide } from "../model/types/presentationTypes/Slide";
import { MoveObjectPayload, ResizeObjectPayload } from "../model/methods/objectMethods";
import { FigureType } from "../model/types/presentationTypes/slideObjects/Figure";
import { TextboxStyles, TextboxAlignment } from "../model/types/presentationTypes/slideObjects/Textbox";
import { textPayload } from "../model/methods/textboxMethods";


function changePresentationTitle(title: string) {
    return {
        type: CHANGE_PRESENTATION_TITLE,
        title,
    }
}

function addSlide(slide: Slide) {
    return {
        type: ADD_SLIDE,
        slide,
    }
}

function createSlide() {
    return {
        type: CREATE_SLIDE,
    }
}

function selectSlide(slideId: string) {
    return {
        type: SELECT_SLIDE,
        slideId,
    }
}

function unselectSlide() {
    return {
        type: UNSELECT_SLIDE,
    }
}

function setBackgroundSlide(background: ColorBackground | ImageBackground) {
    return {
        type: SET_BACKGROUND_SLIDE,
        background,
    }
}

function moveSlide(delta: number) {
    return {
        type: MOVE_SLIDE,
        delta,
    }
}

function deleteSlide(slideId: string) {
    return {
        type: DELETE_SLIDE,
        slideId,
    }
} 

function selectObject(objectId: string) {
    return {
        type: SELECT_OBJECT,
        objectId,
    }
}

function unselectObject(objectId: string) {
    return {
        type: UNSELECT_OBJECT,
        objectId,
    }
}

function deleteObject() {
    return {
        type: DELETE_OBJECT,
    }
}

function resizeObject(payload: ResizeObjectPayload) {
    return {
        type: RESIZE_OBJECT,
        payload,
    }
}

function moveObject(payload: MoveObjectPayload) {
    return {
        type: MOVE_OBJECT,
        payload,
    }
}

function createFigure(figureType: FigureType) {
    return {
        type: CREATE_FIGURE,
        figureType,
    }
}

function setColorFigure(color: string) {
    return {
        type: SET_COLOR_FIGURE,
        color,
    }
}

function setStrokeFigureColor(color: string) {
    return {
        type: SET_STROKECOLOR_FIGURE,
        color,
    }
}

function changeOpacity(opacity: number) {
    return {
        type: CHANGE_OPACITY,
        opacity,
    }
}

function createImage(src: string) {
    return {
        type: CREATE_IMAGE,
        src,
    }
}

function changeOpacityImage(opacity: number) {
    return {
        type: CHANGE_OPACITY_IMAGE,
        opacity,
    }
}

function setImageBackground(src: string) {
    return {
        type: SET_IMAGE_BACKGROUND,
        src,
    }
}

function createTextbox() {
    return {
        type: CREATE_TEXTBOX,
    }
}

function setText(payload: textPayload) {
    return {
        type: SET_TEXT,
        payload,
    }
}

function changeTextColor(color: string) {
    return {
        type: CHANGE_TEXT_COLOR,
        color,
    }
}

function changeTextBackground(color: string) {
    return {
        type: CHANGE_TEXT_BACKGROUND,
        color,
    }
}

function changeTextSize(size: number) {
    return {
        type: CHANGE_TEXT_SIZE,
        size,
    }
}

function changeFont(font: string) {
    return {
        type: CHANGE_FONT,
        font,
    }
}

function changeTextStyle(styles: TextboxStyles) {
    return {
        type: CHANGE_TEXT_STYLE,
        styles,
    }
}

function changeTextAlignment(alignment: TextboxAlignment) {
    return {
        type: CHANGE_TEXT_ALIGNMENT,
        alignment,
    }
}

export {
    setBackgroundSlide,
    changePresentationTitle,
    addSlide,
    createSlide,
    selectSlide,
    unselectSlide,
    moveSlide,
    deleteSlide,
    selectObject,
    unselectObject,
    deleteObject,
    resizeObject,
    moveObject,
    createFigure,
    setColorFigure,
    setStrokeFigureColor,
    changeOpacity,
    createImage,
    changeOpacityImage,
    setImageBackground,
    createTextbox,
    setText,
    changeTextColor,
    changeTextBackground,
    changeTextSize,
    changeFont,
    changeTextStyle,
    changeTextAlignment,
}