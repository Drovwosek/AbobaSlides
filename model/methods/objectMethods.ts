import {ApplicationState, Presentation, ISlideObject} from "../types";

function selectObject(app: ApplicationState): ApplicationState {
    return {
        ...app
    }
}

function unselectObject(app: ApplicationState): ApplicationState {
    return {
        ...app
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
function resizeObject(presentation: Presentation, payload: ResizeObjectPayload): Presentation {
    return presentation
}

function removeObject(app: ApplicationState): ApplicationState { /*см выделенные и удаляй*/
    return {
        ...app
    }
}

function addSlideObject(app: ApplicationState, slideObject: ISlideObject): ApplicationState { /*см выделенные и удаляй*/
    return {
        ...app
    }
}
export {
    addSlideObject,
}

