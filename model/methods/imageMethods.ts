import {ApplicationState} from "../types/Application";
import {createImage} from "../types/presentationTypes/slideObjects/Image";
import {addSlideObject} from "./objectMethods";

function addImage(app: ApplicationState, src: string): ApplicationState {
    return addSlideObject(app, createImage(src))
}

function setImageAsBackground(app: ApplicationState): ApplicationState {
    /*
    *
    * */
    return app
}

export {
    addImage,
    setImageAsBackground,
}
