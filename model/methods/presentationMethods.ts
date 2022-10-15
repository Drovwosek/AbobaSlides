import {Presentation, Slide} from "../types";

function createPresentation(): Presentation {
    return {
        name : "new Presentation",
        slides: [],
        selection: {
            slideIds: [],
            objectIds: []
        }
    }
}

function renamePresentation(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        name: newName,
    }
}

function exportPresentationJson(presentation: Presentation): string {
    return JSON.stringify(presentation)
}

function importPresentationJson(json: string): Presentation {
    return JSON.parse(json)
}
