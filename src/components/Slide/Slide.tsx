import React, {ReactNode} from 'react';
import styles from "./Slide.module.css";
import {isImageBackground, Slide as SlideData} from "../../../src/model/types/presentationTypes/Slide";
import {isFigure} from "../../model/types/presentationTypes/slideObjects/Figure";
import {isImage} from "../../model/types/presentationTypes/slideObjects/Image";
import {FigureView} from "../objects/Figure";
import {Image} from "../objects/Image";
import {isTextbox} from "../../model/types/presentationTypes/slideObjects/Textbox";
import {Textbox} from "../objects/Textbox";
import { ApplicationState } from '../../model/types/Application';
import store from '../../store/store';
import { selectSlide } from '../../store/actionCreators';

type SlideProps = {
  slide: SlideData,
    selectObjectIds: Array<string>,
}

function getSlideObject(slide: SlideData, selectedObjectIds: Array<string>): Array<ReactNode> {
    let objects: Array<ReactNode> = []

    slide.objects.forEach(obj => {
        if (isFigure(obj)) {
            objects.push(
                <FigureView 
                     key={obj.id}
                     figure={obj}
                     selected={(selectedObjectIds.includes(obj.id))}
                />
            )
        } 
        else 
        {
            if (isImage(obj)) {
                objects.push(
                    <Image 
                        key={obj.id}
                        image={obj}
                        selected={selectedObjectIds.includes(obj.id)}
                    />
                )
            }
            else
            {
                if (isTextbox(obj)) {
                    objects.push(
                        <Textbox 
                            key={obj.id}
                            textbox={obj}
                            selected={selectedObjectIds.includes(obj.id)}
                        />
                    )
}
            }
        }
    })

    return objects
}

function setSlideBackground(slide: SlideData): string {
    let background = '#fff'
      
    if (isImageBackground(slide.background))
    {
        background = `url(${slide.background.src}) no-repeat center / 100%`
    }
    else
    {
        background = slide.background
    }


    return background
}

function Slide(props: SlideProps) {
    return (
        <div className = {styles.slide}
             style={{background: setSlideBackground(props.slide)}}
        >
            {getSlideObject(props.slide, props.selectObjectIds)}
    </div>
  );
}

export default Slide;
