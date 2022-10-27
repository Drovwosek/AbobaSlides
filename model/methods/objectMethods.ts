import {ISlideObject} from "../types/presentationTypes/slideObjects/ISlideObject";
import {ApplicationState} from "../types/Application";
import {Slide} from "../types/presentationTypes/Slide";

function addSlideObject(app: ApplicationState, object: ISlideObject) {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                if (slide.id == app.selection.slideIds[app.selection.slides.length - 1]) {
                    slide.objects.concat(object)
                }
            })
        }
    }
}

function selectObject(app: ApplicationState, object: ISlideObject): ApplicationState {
    return {
        ...app,
        selection: {
            ...app.selection,
            objectIds: app.selection.objectIds.concat(object.id)
        }
    }
}

function unselectObject(app: ApplicationState, object: ISlideObject): ApplicationState {
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
        ...app,
        presentation: {
            ...app.presentation,
            slides: app.presentation.slides.map(slide => {
                if (slide.id in app.selection.slideIds) {
                    slide.objects.map(obj => {
                        if (obj.id in app.selection.objectIds) {
                            obj.x += payload.x;
                            obj.y += payload.y
                        }
                    })
                }
            })
        }
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
            slides: app.presentation.slides.map(slide => {
                slide.objects.filter(obj => !(obj.id in app.selection.objectIds))
            })
        },
        selection: {
            objectIds: []
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