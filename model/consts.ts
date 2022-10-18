const newPresentation = {
    name: 'newPresentation',
    slides: [],
}

const newSlide = {
    id: '',
    objects: [],
    background: ''
}
const newTextbox = {
    textColor: '#000',
    backgroundColor: '#fff',
    text: 'text',
    font: 'IBM plex',
    textSize: 24,
    textStyle: 'normal',
    alignment: 'left' ,
}

const newRectangle = {
    color: '#fff',
    strokeColor: '#000',
    opacity: 0,
    type: 'rectangle',
}

const newTriangle = {
    color: '#fff',
    strokeColor: '#000',
    opacity: 0,
    type: 'triangle',
}

const newCircle = {
    color: '#fff',
    strokeColor: '#000',
    opacity: 0,
    type: 'circle',
}

export{
    newPresentation,
    newSlide,
    newCircle,
    newRectangle,
    newTextbox,
    newTriangle
};
