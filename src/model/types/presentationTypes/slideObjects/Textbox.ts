import { generateId } from "../../../../actions/IdGenerater";
import {ISlideObject, isSlideObject} from "./ISlideObject";

type TextboxAlignment = 'left' | 'center' | 'right'

type TextboxStyles = {
    bold: boolean,
    italic: boolean,
    underlined: boolean,
}

function isTextboxStyles(object: any): object is TextboxStyles {
    const hasBold = typeof object.bold === "boolean"
    const hasItalic = typeof object.italic === "boolean"
    const hasUnderlined = typeof object.underlined === "boolean"

    return hasBold && hasItalic && hasUnderlined
}

type Textbox = ISlideObject & {
    textColor: string,
    backgroundColor: string,
    text: string,
    font: string,
    textSize: number,
    styles: TextboxStyles,
    alignment: TextboxAlignment,
}

function createTextbox(): Textbox {
    return {
        id: generateId(),
        width: 100,
        height: 100,
        x: 0,
        y: 0,
        textColor: "#000",
        backgroundColor: "#00000000",
        text: "",
        font: "Times New Roman",
        textSize: 10,
        styles: {
            bold: false,
            italic: false,
            underlined: false,
        },
        alignment: "left",
    }
}

function isTextbox(object: any): object is Textbox {
    const hasTextColor = typeof object.textColor === 'string'
    const hasBackgroundColor = typeof object.backgroundColor === 'string'
    const hasText = typeof object.text  === 'string'
    const hasFont = typeof object.font === 'string'
    const hasTextSize = typeof object.textSize === 'number'
    const hasStyles = object.styles && isTextboxStyles(object.styles)
    const hasAlignment = typeof object.alignment === 'string'

    return isSlideObject(object) && hasTextColor && hasBackgroundColor && hasText && hasFont && hasTextSize && hasStyles && hasAlignment
}

export type {
    TextboxAlignment,
    Textbox,
    TextboxStyles,
}

export {
    createTextbox,
    isTextbox,
}