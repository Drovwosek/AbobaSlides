import React, {useState} from "react";
import {Textbox as TextboxType} from "../../model/types/presentationTypes/slideObjects/Textbox";
import {Rect} from "./Rect";
import styles from "./Textbox.module.css"
import store from "../../store/store";
import { setText } from "../../store/actionCreators";

type TextboxProps = {
    textbox: TextboxType,
    selected: boolean,
}

function Textbox(props: TextboxProps) {
    const [text, setTextState] = useState('')

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
                value={text}
                onChange={event => 
                    {
                        setTextState(event.target.value)
                        store.dispatch(setText({objectId: props.textbox.id, text: event.target.value}))
                    }}
            /> 
        </Rect>
    )
}

export {
    Textbox,
}