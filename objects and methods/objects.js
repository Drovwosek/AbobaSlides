const Presentation = 
{
    slides: [slide1],
	selectedSlide: {
	    slide: [slide1],
		selectedObjects: [object1],
	},
	nameOfPresentation: "AbobaPresa",
}

const Slide1 = 
{
    objects: [object1],
    idSlide: 1,
	background: "#FFF",
}

const object1 =
{
	Width: 100,
	Height: 200,
	typeOfObject: "Textbox", //Textbox, примитивы, image
	xCoordinate: 10,
	yCoordinate: 20,
}

const Textbox =
{
    colorOfText,
	colorOfBackgroung,
	text,
	font,
	textSize,
	styleOfText, //Bold, Italic, Underlined, Usual
}

const Figures =
{
    color,
	colorOfStroke,
	opacity,
}

const Image = 
{
    opacity,	
}