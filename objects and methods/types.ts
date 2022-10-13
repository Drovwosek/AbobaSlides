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
	//typeOfObject: 'Textbox' | 'figure' | 'img',
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
	styleOfText: 'Bold' | 'Italic' | 'Underlined' | 'Usual',
}

type Figures = {
    color: string,
	colorOfStroke: string,
	opacity: number,
	typeOfFigure: 'circle' | 'rectangle' | 'triangle',
}

type Img = {
    opacity: number,
    path: string,
}

