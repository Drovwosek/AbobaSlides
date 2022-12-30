import {FigureType, Figure} from "../../model/types/presentationTypes/slideObjects/Figure";
import {Rect} from "./Rect";
import React, {ReactNode} from "react";

type FigureProps = {
     figure: Figure,
     selected: boolean,
}

function getTypeFigure(width: number, height: number, type: FigureType, color: string = "#fff", strokeColor: string = "#000", opacity: number = 1): ReactNode {
    if (type === "ellipse") {
        return (
            <ellipse cx="50%"
                     cy="50%"
                     rx={`${width / 2}`}
                     ry={`${height / 2}`}
                     stroke={strokeColor}
                     fill={color}
            />
        )
    }
    else
    {
        if (type === "rectangle") {
            return (
                <rect x={`0`}
                      y={`0`}
                      width={`${width}`}
                      height={`${height}`}
                      stroke={strokeColor}
                      fill={color}
                />
            )
        }
        else
        {
            if (type === "triangle") {
                return (
                    <polygon
                        points={`0,${height} ${width},${height} ${width / 2},0`}
                        stroke={strokeColor}
                        fill={color}
                    />
                )
            }
            else
            {
                return null
            }
        }
    }
}

function FigureView(props: FigureProps) {
    return (
        <Rect x={props.figure.x}
            y={props.figure.y}
            width={props.figure.width}
            height={props.figure.height}
            selected={props.selected}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={'100%'}
                 height={'100%'}>
                {getTypeFigure(props.figure.width, props.figure.height, props.figure.type, props.figure.color, props.figure.strokeColor, props.figure.opacity)}
            </svg>
        </Rect>
    )
}

export {
    FigureView,
}
