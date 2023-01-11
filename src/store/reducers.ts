import { ApplicationState } from "../model/types/Application"
import { createPresentation } from "../model/types/presentationTypes/Presentation"
import { generateId } from "../actions/IdGenerater"
import { ADD_SLIDE, CHANGE_PRESENTATION_TITLE, CREATE_SLIDE, DELETE_SLIDE, SELECT_SLIDE, SET_BACKGROUND_SLIDE, UNSELECT_SLIDE, MOVE_SLIDE, SELECT_OBJECT, UNSELECT_OBJECT, MOVE_OBJECT, RESIZE_OBJECT, DELETE_OBJECT, CREATE_FIGURE, SET_COLOR_FIGURE, SET_STROKECOLOR_FIGURE, CHANGE_OPACITY, CREATE_IMAGE, CHANGE_OPACITY_IMAGE, CREATE_TEXTBOX, CHANGE_TEXT_COLOR, CHANGE_TEXT_BACKGROUND, CHANGE_TEXT_SIZE, CHANGE_FONT, CHANGE_TEXT_STYLE, CHANGE_TEXT_ALIGNMENT, SET_IMAGE_BACKGROUND, SET_TEXT, IMPORT_PRESENTATION, GO_TO_NEXT_STATE, GO_TO_LAST_STATE} from "./actions"
import { Slide } from "../model/types/presentationTypes/Slide"
import { createSelection } from "../model/types/SelectionData"
import { deleteSlides, setBackgroundSlide } from "../model/methods/slideMethods"
import { moveSlides } from "../model/methods/slideMethods"
import { moveObject, removeObject, resizeObject } from "../model/methods/objectMethods"
import { addFigure, changeOpacity, setFigureColor, setStrokeFigureColor } from "../model/methods/figureMethods"
import { addImage, changeOpacityImage, setImageAsBackground } from "../model/methods/imageMethods"
import { addTextbox, changeFont, changeTextAlignment, changeTextBackground, changeTextColor, changeTextSize, changeTextStyle, setText } from "../model/methods/textboxMethods"
import {addToHistory, clearRedo, redo, undo, undoStack} from "../model/types/History";

const defaultApplication: ApplicationState = createPresentation()

const applicationReducers = (state = defaultApplication, action: any) => {
    switch (action.type) {
        case IMPORT_PRESENTATION:
            return action.app
        case GO_TO_LAST_STATE:
            return undo(state)
        case GO_TO_NEXT_STATE:
            return redo(state)
        case SET_BACKGROUND_SLIDE:
            addToHistory(state)
            return setBackgroundSlide(state, action.background)
        case MOVE_SLIDE:
            addToHistory(state)
            return moveSlides(state, action.delta)
        case DELETE_SLIDE:
            addToHistory(state)
            return deleteSlides(state, action.slideId)
        case MOVE_OBJECT:
            addToHistory(state)
            return moveObject(state, action.payload)
        case RESIZE_OBJECT:
            addToHistory(state)
            return resizeObject(state, action.payload)
        case DELETE_OBJECT:
            addToHistory(state)
            return removeObject(state)
        case CREATE_FIGURE:
            addToHistory(state)
            return addFigure(state, action.figureType)
        case SET_COLOR_FIGURE:
            addToHistory(state)
            return setFigureColor(state, action.color)
        case SET_STROKECOLOR_FIGURE:
            addToHistory(state)
            return setStrokeFigureColor(state, action.color)
        case CHANGE_OPACITY:
            addToHistory(state)
            return changeOpacity(state, action.opacity)
        case CREATE_IMAGE:
            addToHistory(state)
            return addImage(state, action.src)
        case CHANGE_OPACITY_IMAGE:
            addToHistory(state)
            return changeOpacityImage(state, action.opacity)
        case SET_IMAGE_BACKGROUND:
            addToHistory(state)
            return setImageAsBackground(state, action.src)
        case CREATE_TEXTBOX:
            addToHistory(state)
            return addTextbox(state)
        case SET_TEXT:
            addToHistory(state)
            return setText(state, action.payload)
        case CHANGE_TEXT_COLOR:
            addToHistory(state)
            return changeTextColor(state, action.color)
        case CHANGE_TEXT_BACKGROUND:
            addToHistory(state)
            return changeTextBackground(state, action.color)
        case CHANGE_TEXT_SIZE:
            addToHistory(state)
            return changeTextSize(state, action.size)
        case CHANGE_FONT:
            addToHistory(state)
            return changeFont(state, action.font)
        case CHANGE_TEXT_STYLE:
            addToHistory(state)
            return changeTextStyle(state, action.styles)
        case CHANGE_TEXT_ALIGNMENT:
            addToHistory(state)
            return changeTextAlignment(state, action.alignment)
        default:
            addToHistory(state)
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
            return state.concat({id: generateId(), objects: [], background: '#FFF'})
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