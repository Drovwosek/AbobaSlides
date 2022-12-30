import React from 'react';
import styles from './App.module.css';
import Slide from '../components/Slide/Slide';
import SlideList from '../components/SlideList/SlideList';
import {createSlide, Slide as SlideType} from '../../src/model/types/presentationTypes/Slide';
import {ApplicationState} from "../../src/model/types/Application";
import {TopBar} from '../components/TopBar/TopBar';

type AppProps = {
    app: ApplicationState,
}

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
        }
    }
    else
    {
        slide = createSlide()
    }

    return slide
}

function App(props: AppProps) {
    return (
        <div className = {styles.app}>
            <TopBar/>
            <div className={styles.slideContainer}>
                <input
                    className={styles.namePresentation} 
                    defaultValue={props.app.presentation.name}
                />
                <Slide 
                    slide={getSlide(props.app)} 
                    selectObjectIds={props.app.selection.objectIds}
                />
            </div>
            <div className={styles.slideListContainer}>
                <SlideList
                    slides={props.app.presentation.slides}
                />
            </div>
           
        </div>
    );
}

export default App;