import {ISlideObject} from "../types/presentationTypes/slideObjects/ISlideObject";
import {ApplicationState} from "../types/Application";
import {Slide} from "../types/presentationTypes/Slide";
import {SelectionData} from "../types/SelectionData";

function addSlideObject(app: ApplicationState, object: ISlideObject) {
    if (app.selection.slideIds.length !== 1) {
        console.error(`can not add object on multiple slides`)
        return app
    }

    const slides = app.presentation.slides.map(slide => {
        if (slide.id === app.selection.slideIds[0]) {
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

interface MoveObjectPayload { /* получаем конечные коордианты из /события нажать отпустить/ */
    x: number,
    y: number,
}
function moveObject(app: ApplicationState, payload: MoveObjectPayload): ApplicationState { /*вызов для каждого объекта в группе*/
    const selectedSlideId = app.selection.slideIds[0]
    const selectedSlide = app.presentation.slides.find(slide => slide.id === selectedSlideId)
    if (!selectedSlide) {
        console.error(`selected slide not found`)
        return app
    }

    const newSelection: SelectionData = {
        slideIds: [selectedSlideId],
        objectIds: app.selection.objectIds.map(id => {
            if (selectedSlide.objects.find(obj => obj.id === id)) {
                return id
            }
            return ''
        }).filter(x => !!x)
    }

    const slides = app.presentation.slides.map(slide => {
        if (newSelection.slideIds.includes(slide.id)) {
            return {
                ...slide,
                objects: slide.objects.map(obj => {
                    if (newSelection.objectIds.includes(obj.id)) {
                        return {
                            ...obj,
                            x: obj.x + payload.x,
                            y: obj.y + payload.y,
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
        selection: newSelection,
    }
}

interface ResizeObjectPayload { /* получаем кончные коордианты из /события нажать отпустить/ */
    width: number,
    height: number,
}
function resizeObject(app: ApplicationState, payload: ResizeObjectPayload): ApplicationState {
    if (app.selection.objectIds.length !== 1) {
        console.error(`can not resize multiple objects`)
        return app
    }

    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideIds.includes(slide.id)) {
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
        ...app
    }
}

function removeObject(app: ApplicationState): ApplicationState { /*см выделенные и удаляй*/
    const slides = app.presentation.slides.map(slide => {
        if (app.selection.slideIds.includes(slide.id)) {
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