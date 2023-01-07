import React, {ReactNode, useState} from 'react';
import styles from './SlideList.module.css';
import type {Slide as SlideData} from '../../../src/model/types/presentationTypes/Slide';
import Slide from '../Slide/Slide';
import store from '../../store/store';
import { createSlide, selectSlide } from '../../store/actionCreators';

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
                console.log(store.getState().selection.slideId)
                store.getState().presentation.slides.map(slide => console.log(slide.id))
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
    const [isShown, setIsShown] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})

    const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        setIsShown(false)

        setPosition({
            x: event.pageX,
            y: event.pageY,
        })

        setIsShown(true)
    }

    const hideContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsShown(false)
    }

    return (
        <div 
            className={styles.slideList}
            onContextMenu={showContextMenu}
            onClick={hideContextMenu}              
        >
            {getSlides(store.getState().presentation.slides)}
            {isShown && (
                <div 
                    className={styles.contextMenu}
                    style={{top: position.y, left: position.x}}
                >
                    <div className={styles.contextMenuOption} onClick={() => {store.dispatch(createSlide())}}>
                        Add slide
                    </div>
                </div>
            )}
        </div>
    )
}

export default SlideList;
