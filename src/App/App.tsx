import React from 'react';
import './App.css';
import Slide from '../Slide/Slide';
import SlideList from '../SlideList/SlideList';
import {Slide as SlideType} from '../../model/types/presentationTypes/Slide';

const mockSlides: SlideType[] = [{
    id: '1',
    objects: [],
    background: 'blue',
}, {
    id: '2',
    objects: [],
    background: 'yellow',
}]

function App() {
    return (
        <div className="App">
            <Slide/>
            <SlideList slides={mockSlides}/>
        </div>
    );
}

export default App;


//хочу сделать как в фигме. Где писать код?

//Какого рода код будет писаться? Надо пример очень
