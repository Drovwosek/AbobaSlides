import { ApplicationState } from "../model/types/Application"
import { createPresentation } from "../model/types/presentationTypes/Presentation"
import { generateId } from "../actions/IdGenerater"
import { ADD_SLIDE, CHANGE_PRESENTATION_TITLE, CREATE_SLIDE, DELETE_SLIDE, SELECT_SLIDE, SET_BACKGROUND_SLIDE, UNSELECT_SLIDE, MOVE_SLIDE, SELECT_OBJECT, UNSELECT_OBJECT, MOVE_OBJECT, RESIZE_OBJECT, DELETE_OBJECT, CREATE_FIGURE, SET_COLOR_FIGURE, SET_STROKECOLOR_FIGURE, CHANGE_OPACITY, CREATE_IMAGE, CHANGE_OPACITY_IMAGE, CREATE_TEXTBOX, CHANGE_TEXT_COLOR, CHANGE_TEXT_BACKGROUND, CHANGE_TEXT_SIZE, CHANGE_FONT, CHANGE_TEXT_STYLE, CHANGE_TEXT_ALIGNMENT } from "./actions"
import { Slide } from "../model/types/presentationTypes/Slide"
import { createSelection } from "../model/types/SelectionData"
import { setBackgroundSlide } from "../model/methods/slideMethods"
import { moveSlides } from "../model/methods/slideMethods"
import { moveObject, removeObject, resizeObject } from "../model/methods/objectMethods"
import { addFigure, changeOpacity, setFigureColor, setStrokeFigureColor } from "../model/methods/figureMethods"
import { addImage, changeOpacityImage } from "../model/methods/imageMethods"
import { addTextbox, changeFont, changeTextAlignment, changeTextBackground, changeTextColor, changeTextSize, changeTextStyle } from "../model/methods/textboxMethods"

const defaultApplication: ApplicationState = createPresentation()

const applicationReducers = (state = defaultApplication, action: any) => {
    switch (action.type) {
        case SET_BACKGROUND_SLIDE:
            return setBackgroundSlide(state, action.background)
        case MOVE_SLIDE:
            return moveSlides(state, action.delta)
        case MOVE_OBJECT:
            return moveObject(state, action.payload)
        case RESIZE_OBJECT:
            return resizeObject(state, action.payload)
        case DELETE_OBJECT:
            return removeObject(state)
        case CREATE_FIGURE:
            return addFigure(state, action.figureType)
        case SET_COLOR_FIGURE:
            return setFigureColor(state, action.color)
        case SET_STROKECOLOR_FIGURE:
            return setStrokeFigureColor(state, action.color)
        case CHANGE_OPACITY:
            return changeOpacity(state, action.opacity)
        case CREATE_IMAGE:
            return addImage(state, action.src)
        case CHANGE_OPACITY_IMAGE:
            return changeOpacityImage(state, action.opacity)
        case CREATE_TEXTBOX:
            return addTextbox(state)
        case CHANGE_TEXT_COLOR:
            return changeTextColor(state, action.color)
        case CHANGE_TEXT_BACKGROUND:
            return changeTextBackground(state, action.color)
        case CHANGE_TEXT_SIZE:
            return changeTextSize(state, action.size)
        case CHANGE_FONT:
            return changeFont(state, action.font)
        case CHANGE_TEXT_STYLE:
            return changeTextStyle(state, action.styles)
        case CHANGE_TEXT_ALIGNMENT:
            return changeTextAlignment(state, action.alignment)
        default:
            return {
                presentation: presentationReducers(state.presentation, action),
                selection: selectionReducers(state.selection, action),
            }
    }
}   

const selectionReducers = (state = createSelection(), action: any) => {
    return {
        slideId: selectedSlide(state.slideId, action),
        objectIds: selectedObjects(state.objectIds, action),
    }
}

const selectedSlide = (state = "", action: any) => {
    switch (action.type) {
        case SELECT_SLIDE:
            return action.slideId
        case UNSELECT_SLIDE:
            return ""
        default:
            return state
    }
}

const selectedObjects = (state: Array<string> = [], action: any) => {
    switch (action.type) {
        case SELECT_OBJECT:
            return state.concat(action.objectId)
        case UNSELECT_OBJECT:
            return state.filter(objectId => objectId !== action.objectId)
        default:
            return state
    }
}

const presentationReducers = (state = defaultApplication.presentation, action: any) => {
    return {
        name: title(state.name, action),
        slides: slides(state.slides, action),
    }
}

const slides = (state: Array<Slide> = [], action: any) => {
    switch (action.type) {
        case ADD_SLIDE:
            return state.concat(action.slide)
        case CREATE_SLIDE:
            return state.concat({id: generateId(), objects: [], background: '#DBDBDB'})
        case DELETE_SLIDE:
            return state.filter(slide => slide.id !== action.slideId)
        default:
            return state
    }
}

const title = (state = 'New Presentaton', action: any) => {
    if (action.type === CHANGE_PRESENTATION_TITLE) {
        return action.title
    } else {
        return state
    }
}

export {
    applicationReducers,
}