import React from "react";
import {Textbox as TextboxType} from "../../model/types/presentationTypes/slideObjects/Textbox";
import {Rect} from "./Rect";
import styles from "./Textbox.module.css"

type TextboxProps = {
    textbox: TextboxType,
    selected: boolean,
}

function Textbox(props: TextboxProps) {
    return (
        <Rect x={props.textbox.x}
              y={props.textbox.y}
              width={props.textbox.width}
              height={props.textbox.height}
              selected={props.selected}
              objectId={props.textbox.id}
        >
            <textarea className={styles.textbox}
                style={{
                    color: props.textbox.textColor,
                    background: props.textbox.backgroundColor,
                    fontFamily: props.textbox.font,
                    fontSize: `${props.textbox.textSize}px`,
                    fontWeight: (props.textbox.styles.bold) ? "bold" : "normal",
                    fontStyle: (props.textbox.styles.italic) ? "italic" : "normal",
                    textDecoration: (props.textbox.styles.underlined) ? "underline" : "",
                    textAlign: props.textbox.alignment,
                }}
                defaultValue={props.textbox.text}
            /> 
        </Rect>
    )
}

export {
    Textbox,
}