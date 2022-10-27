import {ISlideObject, isSlideObject} from "./ISlideObject";

type TextboxStyle = 'bold' | 'italic' | 'underlined' | 'normal'

type TextboxAlignment = 'left' | 'center' | 'right'

type Textbox = ISlideObject & {
    textColor: string,
    backgroundColor: string,
    text: string,
    font: string,
    textSize: number,
    textStyle: TextboxStyle,
    alignment: 'left' | 'center' | 'right',
}

function createTextbox(): Textbox {
    return {
        id: "8===>",
        width: 100,
        height: 100,
        x: 250,
        y: 250,
        textColor: "#000",
        backgroundColor: "#fff",
        text: "",
        font: "Times New Roman",
        textSize: 10,
        textStyle:  'normal',
        alignment: 'left',
    }
}

function isTextbox(object: any): object is Textbox {
    const hasTextColor = typeof object.textColor === 'string'
    const hasBackgroundColor = typeof object.backgroundColor === 'string'
    const hasText = typeof object.text  === 'string'
    const hasFont = typeof object.font === 'string'
    const hasTextSize = typeof object.textSize === 'number'
    const hasTextStyle = typeof object.textStyle === 'string'
    const hasAlignment = typeof object.alignment === 'string'

    return isSlideObject(object) && hasTextColor && hasBackgroundColor && hasText && hasFont && hasTextSize && hasTextStyle && hasAlignment
}

export {
    TextboxStyle,
    TextboxAlignment,
    Textbox
}

export {
    createTextbox,
    isTextbox,
}