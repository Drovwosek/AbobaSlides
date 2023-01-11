import {ApplicationState} from "./Application";

export const undoStack: Array<ApplicationState> = [];
export const redoStack: Array<ApplicationState> = [];

function clearRedo() {
    while(redoStack.length > 0) {
        redoStack.pop();
    }
}

function addToHistory(application: ApplicationState) {
    undoStack.push(application)
}

function undo(currentState: ApplicationState): ApplicationState {
    if (!undoStack.length) {
        return currentState
    }

    const slideState: ApplicationState = undoStack.pop()!;
    redoStack.push(currentState);

    return slideState;
}

function redo(currentState: ApplicationState): ApplicationState {
    if (!redoStack.length) {
        return currentState
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