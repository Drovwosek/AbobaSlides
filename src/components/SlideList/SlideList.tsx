import React, {ReactNode, useState} from 'react';
import styles from './SlideList.module.css';
import type {Slide as SlideData} from '../../../src/model/types/presentationTypes/Slide';
import Slide from '../Slide/Slide';
import store from '../../store/store';
import { createSlide, deleteSlide, selectSlide } from '../../store/actionCreators';

type SlideThumbnailProps = {
    slide: SlideData,
    selectionObjectIds: Array<string>,
}

function SlideThumbnail(props: SlideThumbnailProps) {
    return (
        <div 
            className={styles.thumbnail}
            onClick={() => {
                store.dispatch(selectSlide(props.slide.id))
            }}
        >
            <Slide slide={props.slide} selectObjectIds={props.selectionObjectIds}/>
        </div>
    );
}

function getSlides(slides: Array<SlideData>): Array<ReactNode> {
    return slides.map(slideData => {
        return (
            <SlideThumbnail key={slideData.id} slide={slideData} selectionObjectIds={[]} />
        )
    })
}

function SlideList() {
    return (
        <div 
            className={styles.slideList}    
        >
            {getSlides(store.getState().presentation.slides)}
        </div>
    )
}

export default SlideList;
