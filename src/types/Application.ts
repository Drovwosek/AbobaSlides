import {SelectionData} from "./SelectionData";
import {Presentation} from "./presentationTypes/Presentation";

export type ApplicationState = {
    presentation: Presentation,
    selection: SelectionData,
}
