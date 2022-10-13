type Presentation =
    {
        slides: Array<Slide>,
        selectedSlide: {
            slide: Array<Slide>,
            selectedObjects: Array<Obj>,
        },
        nameOfPresentation: string,
    }

type Slide =
    {
        objects: [ object, ],
        background: string,  //Создеём картину и растягиваем её по слайду
    }

type Obj =
    {
        width: number,
        height: number,
        typeOfObject: string, //Textbox, Figures, img
    }

type Textbox =
    {
        colorOfText: string,
        colorOfBackgroung: string,
        textBlock: string,
        font: string,
        textSize: number,
    }

type Figures =
    {
        color: string,
        colorOfStroke: string,
        opacity: number,
        typeOfFigure: string,
    }

type Img =
    {
        opacity: number,
        path: string,
    }



function addSlide(presentation: Presentation): Presentation {//add in the end
}

function deleteSlide(presentation: Presentation, slide: Slide): Presentation {
}

function moveSlides(presentation: Presentation): Presentation {
}

function selectSlide(presentation: Presentation): Presentation {}

function selectObject(presentation: Presentation): Presentation {}

function unselectSlide(presentation: Presentation): Presentation {}

function unselectObject(presentation: Presentation): Presentation {}

function moveObject(presentation: Presentation): Presentation {}

function addObject(presentation: Presentation): Presentation {}

function addBackgroundOfSlide(presentation: Presentation): Presentation {

}

//create presentation
//Rename presentation
//изменить цвет текста
//изменить фон
//загрузить картинку
//установить картинку как фон
//загрузить презу
//выгрузить презу
//изменить размер текста
//изменить шрифт текста
//изменить стиль текста