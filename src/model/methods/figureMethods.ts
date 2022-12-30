import {addSlideObject} from "./objectMethods";
import {ApplicationState} from "../types/Application";
import {createFigure, FigureType} from "../types/presentationTypes/slideObjects/Figure";

function addFigure(app: ApplicationState, figureType: FigureType): ApplicationState {
    return addSlideObject(app, createFigure(figureType))
}

