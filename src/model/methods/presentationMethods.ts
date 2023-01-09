import {ApplicationState} from "../types/Application";
import {createSelection} from "../types/SelectionData";
import {createPresentation, isPresentation} from "../types/presentationTypes/Presentation";

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
        selection: createSelection()
    }
}

export {
    renamePresentation,
    exportPresentationJson,
    importPresentationJson,
}
