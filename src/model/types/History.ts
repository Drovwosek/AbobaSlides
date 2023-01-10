import {ApplicationState} from "./Application";



const undoStack: Array<ApplicationState> = [];
const redoStack: Array<ApplicationState> = [];

function addToHistory(application: ApplicationState){
    undoStack.push({...application})
}

function undo(currentState: ApplicationState): ApplicationState {
    const slideState: ApplicationState = undoStack.pop()!;
    redoStack.push(currentState);

    return slideState;
}

function redo(): ApplicationState | undefined{
    const slidesState: ApplicationState | undefined = redoStack.pop();

    if(slidesState){
        addToHistory(slidesState);
    }
    return slidesState;
}

export{
    addToHistory,
    undo,
    redo
}