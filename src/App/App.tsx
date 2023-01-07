import React, { useState } from 'react';
import styles from './App.module.css';
import Slide from '../components/Slide/Slide';
import SlideList from '../components/SlideList/SlideList';
import {createSlide, Slide as SlideType} from '../../src/model/types/presentationTypes/Slide';
import {ApplicationState} from "../../src/model/types/Application";
import {TopBar} from '../components/TopBar/TopBar';
import store from '../store/store';
import { addSlide, changePresentationTitle, selectSlide} from '../store/actionCreators';

function getSlide(app: ApplicationState): SlideType {
    let slide

    if (app.selection.slideId)
    {
        slide = app.presentation.slides.find(slide => slide.id === app.selection.slideId)
        if (slide !== undefined)
        {
            return slide
        }
        else
        {
            slide = createSlide()
            store.dispatch(addSlide(slide))
            store.dispatch(selectSlide(slide.id))
        }
    }
    else
    {
        slide = createSlide()
        store.dispatch(addSlide(slide))
        store.dispatch(selectSlide(slide.id))
    }

    return slide
}

function App() {
    const [title, setTitle] = useState() 

    return (
        <div 
            className = {styles.app} 
        >
            <TopBar/>
            <div className={styles.slideContainer}>
                <input
                    type="text"
                    value={title}
                    className={styles.namePresentation} 
                    defaultValue={store.getState().presentation.name}
                    onChange={event => {
                        store.dispatch(changePresentationTitle(event.target.value))
                    }}
                />
                <Slide 
                    slide={getSlide(store.getState())} 
                    selectObjectIds={store.getState().selection.objectIds}
                />
            </div>
            <div className={styles.slideListContainer}>
                <SlideList />
            </div>
        </div>
    );
}

export {
    App,
}