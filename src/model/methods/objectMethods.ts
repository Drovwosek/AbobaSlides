import {ISlideObject} from "../types/presentationTypes/slideObjects/ISlideObject";
import {ApplicationState} from "../types/Application";
import {SelectionData} from "../types/SelectionData";

function addSlideObject(app: ApplicationState, object: ISlideObject) {
    const slides = app.presentation.slides.map(slide => {
        if (slide.id === app.selection.slideId) {
            return {
                ...slide,
                objects: slide.objects.concat(object)
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
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

export interface MoveObjectPayload { /* получаем конечные коордианты из /события нажать отпустить/ */
    objectId: string,
    x: number,
    y: number,
}
function moveObject(app: ApplicationState, payload: MoveObjectPayload): ApplicationState { /*вызов для каждого объекта в группе*/
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (payload.objectId === obj.id) {
                        return {
                            ...obj,
                            x: payload.x,
                            y: payload.y,
                        }
                    }
                    return obj
                })
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        },
    }
}

export interface ResizeObjectPayload {
    width: number,
    height: number,
}
function resizeObject(app: ApplicationState, payload: ResizeObjectPayload): ApplicationState {
    if (app.selection.objectIds.length !== 1) {
        console.error(`can not resize multiple objects`)
        return app
    }

    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (app.selection.objectIds.includes(obj.id)) {
                        return {
                            ...obj,
                            height: payload.height,
                            width: payload.width,
                        }
                    }
                    return obj
                })
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        }
    }
}

function removeObject(app: ApplicationState): ApplicationState {
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideId === slide.id) {
            return {
                ...slide,
                objects: slide.objects.filter(obj => !(app.selection.objectIds.includes(obj.id)))
            }
        }
        return slide
    })

    return {
        ...app,
        presentation: {
            ...app.presentation,
            slides,
        },
        selection: {
            ...app.selection,
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