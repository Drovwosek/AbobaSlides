import React, {ReactNode} from 'react';
import styles from './SlideList.module.css';
import type {Slide as SlideData} from '../../../src/model/types/presentationTypes/Slide';
import Slide from '../Slide/Slide';

type SlideThumbnailProps = {
    slide: SlideData,
    selectionObjectIds: Array<string>,
}

function SlideThumbnail(props: SlideThumbnailProps) {
    return (
        <div className={styles.thumbnail}>
            <Slide slide={props.slide}
                selectObjectIds={props.selectionObjectIds}
            />
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

type SlideListProps = {
    slides: Array<SlideData>,
}

function SlideList({slides}: SlideListProps) {
    return (
        <div className={styles.slideList}>
            {getSlides(slides)}
        </div>
    );
}

export default SlideList;
