import {Presentation} from "../types";

function selectObject(presentation: Presentation): Presentation {
    return presentation
}

function unselectObject(presentation: Presentation): Presentation {
    return presentation
}

interface MoveObjectPayload { /* получаем кончные коордианты из /события нажать отпустить/ */
    x: number,
    y: number,
}
function moveObject(presentation: Presentation, payload: MoveObjectPayload): Presentation { /*вызов для каждого объекта в группе*/
    return presentation
}

interface ResizeObjectPayload { /* получаем кончные коордианты из /события нажать отпустить/ */
    width: number,
    height: number,
}
function resizeObject(presentation: Presentation, payload: ResizeObjectPayload): Presentation {
    return presentation
}

function removeObject(presentation: Presentation): Presentation { /*см выделенные и удаляй*/
    return presentation
}
