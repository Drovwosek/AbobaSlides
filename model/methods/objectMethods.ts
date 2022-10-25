import {ApplicationState} from "../types/Application";
import {Textbox} from "../types/presentationTypes/slideObjects/Textbox";
import {Image} from "../types/presentationTypes/slideObjects/Image";
import {Figure} from "../types/presentationTypes/slideObjects/Figure";
import {ISlideObject} from "../types/presentationTypes/slideObjects/ISlideObject";

function addSlideObject(app: ApplicationState, object: ISlideObject) : ApplicationState {
    return app
}

function selectObject(app: ApplicationState, object: Textbox | Figure | Image): ApplicationState {
    return {
        ...app,
        selection: {
            ...app.selection,
            objectIds: app.selection.objectIds.concat(object.id)
        }
    }
}

function unselectObject(app: ApplicationState, object: Textbox | Figure | Image): ApplicationState {
    return {
        ...app,
        selection: {
            ...app.selection,
            objectIds: app.selection.objectIds.filter(id => id !== object.id)
        }
    }
}

interface MoveObjectPayload { /* получаем конечные коордианты из /события нажать отпустить/ */
    x: number,
    y: number,
}
function moveObject(app: ApplicationState, payload: MoveObjectPayload): ApplicationState { /*вызов для каждого объекта в группе*/
    return {
        ...app
    }
}

interface ResizeObjectPayload { /* получаем кончные коордианты из /события нажать отпустить/ */
    width: number,
    height: number,
}
function resizeObject(app: ApplicationState, payload: ResizeObjectPayload): ApplicationState {
    return {
        ...app
    }
}

function removeObject(app: ApplicationState): ApplicationState { /*см выделенные и удаляй*/
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.filter()
        }
    }
}

export {
    addSlideObject,
    selectObject,
    unselectObject,
    moveObject,
    resizeObject,
    removeObject
}