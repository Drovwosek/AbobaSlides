import styles from "./Dot.module.css";

type DotProps = {
    selected: boolean,
    type: string,
}

function Dot(props: DotProps) {
    let style
    switch (props.type) {
        case "LeftTop":
            style = styles.dotLeftTop;
            break;
        case "LeftBottom":
            style = styles.dotLeftBottom;
            break;
        case "RightTop":
            style = styles.dotRightTop;
            break;
        case "RightBottom":
            style = styles.dotRightBottom;
            break;    
        default:
            break;
    }

    return (
        <div className={style}
             style={{
                 display: (props.selected) ? ""  : "none", 
             }}
        >   
        </div>
    )
}

export {
    Dot,
}