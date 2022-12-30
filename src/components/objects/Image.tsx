import {Image as ImageType} from "../../model/types/presentationTypes/slideObjects/Image";
import React, {ReactNode} from "react";
import {Rect} from "./Rect";
import styles from "./Image.module.css";

type ImageProps = {
    image: ImageType,
    selected: boolean,
}

function Image(props: ImageProps) {
    return (
        <Rect x={props.image.x}
              y={props.image.y}
              width={props.image.width}
              height={props.image.height}
              selected={props.selected}
        >
            <img className={styles.image}
                 src={props.image.src}
                 style={{opacity: props.image.opacity}}
            />
        </Rect>
    )
}

export {
    Image,
}