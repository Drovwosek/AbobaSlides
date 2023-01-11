import {ApplicationState} from "./Application";

//

const undoStack: Array<ApplicationState> = [];
const redoStack: Array<ApplicationState> = [];

function addToHistory(application: ApplicationState) {
    undoStack.push(application)
}

function clearRedo(application: ApplicationState) {
   redoStack.filter(() => false)
}

function undo(currentState: ApplicationState): ApplicationState {
    if (!undoStack.length) {
        return currentState
    }

    const slideState: ApplicationState = undoStack.pop()!;
    redoStack.push(currentState);

    return slideState;
}

function redo(): ApplicationState | undefined {
    if (!redoStack.length) {
        return undefined
    }

    const slidesState: ApplicationState = redoStack.pop()!;

        addToHistory(slidesState);

    return slidesState;
}

export{
    addToHistory,
    undo,
    redo,
    clearRedo,
}