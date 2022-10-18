import {ApplicationState, Figure, FigureType, Presentation, createFigure } from "../types";
import {addSlideObject} from "./objectMethods";

function addFigure(app: ApplicationState, figureType: FigureType, ): ApplicationState {
    return addSlideObject(app, createFigure(figureType))
}

