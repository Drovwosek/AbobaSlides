import {ApplicationState, createEmptySelection, isPresentation, Presentation, SelectionData} from "../types"

function createPresentation(): ApplicationState {
    return {
        presentation: {
            name : "new Presentation",
            slides: [],
        },
        selection: createEmptySelection()
    }
}

function renamePresentation(app: ApplicationState, newName: string): ApplicationState {
    return {
        ...app,
        presentation: {
            ...app.presentation,
            name: newName,
        }
    }
}

function exportPresentationJson(app: ApplicationState): string {
    return JSON.stringify(app.presentation)
}

function importPresentationJson(json: string): ApplicationState {
    const rawPresentation = JSON.parse(json)

    if (!isPresentation(rawPresentation)) {
        console.error("invalid input presentation")
        return createPresentation()
    }

    return {
        presentation: rawPresentation,
        selection: createEmptySelection()
    }
}
