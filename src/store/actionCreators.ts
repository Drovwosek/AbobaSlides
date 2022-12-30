import { CHANGE_PRESENTATION_TITLE, CREATE_SLIDE, DELETE_SLIDE, MOVE_SLIDE, SELECT_SLIDE, SET_BACKGROUND_COLOR_SLIDE, SET_BACKGROUND_IMAGE_SLIDE, UNSELECT_OBJECT, UNSELECT_SLIDE } from "./actions";


function changePresentationTitle(title: string) {
    return {
        type: CHANGE_PRESENTATION_TITLE,
        title: title,
    }
}

function createSlide() {
    return {
        type: CREATE_SLIDE,
    }
}

function selectSlide(id: string) {
    return {
        type: SELECT_SLIDE,
        slideId: id,
    }
}

function unselectSlide() {
    return {
        type: UNSELECT_SLIDE,
    }
}

function setBackgroundColorSlide(color: string) {
    return {
        type: SET_BACKGROUND_COLOR_SLIDE,
        color: color,
    }
}

function setBackgroundImageSlide(image: string) {
    return {
        type: SET_BACKGROUND_IMAGE_SLIDE,
        image: image,
    }
}

function moveSlide(delta: number) {
    return {
        type: MOVE_SLIDE,
        delta: delta,
    }
}

function deleteSlide(id: string) {
    return {
        type: DELETE_SLIDE,
        slideId: id,
    }
} 
