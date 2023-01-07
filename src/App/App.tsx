import React, { useState } from 'react';
import styles from './App.module.css';
import Slide from '../components/Slide/Slide';
import SlideList from '../components/SlideList/SlideList';
import {createSlide, Slide as SlideType} from '../../src/model/types/presentationTypes/Slide';
import {ApplicationState} from "../../src/model/types/Application";
import {TopBar} from '../components/TopBar/TopBar';
import store from '../store/store';
import { addSlide, changePresentationTitle, selectSlide, createSlide as createSlideAction } from '../store/actionCreators';
import {connect} from 'react-redux'

type AppProps = {
    app: ApplicationState,
}

function getSlide(): SlideType {
    let slide

    if (store.getState().selection.slideId)
    {
        slide = store.getState().presentation.slides.find(slide => slide.id === store.getState().selection.slideId)
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

function App(props: any) {
    const [title, setTitle] = useState(store.getState().presentation.name) 

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
                        setTitle(event.target.value)
                        store.dispatch(changePresentationTitle(event.target.value))
                    }}
                />
                <Slide 
                    slide={getSlide()} 
                    selectObjectIds={store.getState().selection.objectIds}
                />
            </div>
            <div className={styles.slideListContainer}>
                <SlideList />
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => ({app: state})

const mapDispatchToProps = (dispatch: any) => {
    return {
        addSlide: (slide: any) => dispatch(addSlide(slide)),
        createSlide: () => dispatch(createSlide()),
        
    }
}

export default connect(mapStateToProps)(App)

export {
    App,
}