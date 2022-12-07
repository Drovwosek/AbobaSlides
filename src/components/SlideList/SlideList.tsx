import React from 'react';
import './SlideList.css';
import type {Slide as SlideType} from '../../model/types/presentationTypes/Slide';
import Slide from '../Slide/Slide';

type SlideListProps = {
    slides: SlideType[],
}

function SlideList(props: SlideListProps) {
    return (
        <div className="slide-list">
            {props.slides.map(slide => (
                <Slide key={slide.id}/>
            ))}
        </div>
    );
}

export default SlideList;
