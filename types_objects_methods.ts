type Presentation = {
    slides: Array<Slide>,
    selectedSlide: {
        slide: Array<Slide>,
        selectedObjects: Array<Obj>,
    },
    nameOfPresentation: string,
}

type Slide = {
    objects: Array<Obj>,
    background: string,  //Создеём картину и растягиваем её по слайду
}

type Obj = {
    width: number,
    height: number,
    typeOfObject: "Img" | "Figures" | "Textbox",
    xCoordinate: number,
    yCoordinate: number,
    data: Img | Figures | Textbox,
}

type Textbox = {
    colorOfText: string,
    colorOfBackgroung: string,
    textBlock: string,
    font: string,
    textSize: number,
    styleOfText: "Bold" | "Italic" | "Underlined" | "Usual",
}

type Figures = {
    color: string,
    colorOfStroke: string,
    opacity: number,
    typeOfFigure: 'Circle' | 'Triangle' | 'Rectangle',
}

type Img = {
    opacity: number,
    path: string,
}

const img: Obj = {
    width: 101,
    height: 202,
    typeOfObject: "Img",
    xCoordinate: 210,
    yCoordinate: 220,
    data: Img = {
        opacity: 90,
        path: "iڱu(u+",
    }
}

const Textbox: Obj = {
    width: 101,
    height: 202,
    typeOfObject: "Textbox",
    xCoordinate: 130,
    yCoordinate: 120,
    data: Textbox = {
        colorOfText: "#000",
        colorOfBackgroung: "#fff",
        textBlock: "abob",
        font: "Open Sans",
        textSize: 15000,
        styleOfText: "Bold",
    }
}

const slide1: Slide = {
    objects: [img, Textbox],
    background: "#fff",
}

const presa: Presentation = {
    slides: [slide1],
    selectedSlide: {
        slide: [slide1],
        selectedObjects: [img, Textbox],
    },
    nameOfPresentation: "AbobaPesentation",
}
