const object1 = {
	Width: 100,
	Height: 200,
	typeOfObject: "Textbox", //Textbox, примитивы, image
	xCoordinate: 10,
	yCoordinate: 20,
	data: {
		colorOfText: "#660c0c",
		colorOfBackground: "#fff",
		text: "Abob",
		font: "Open Sans",
		textSize: 1009,
		styleOfText: "Usual", //Bold, Italic, Underlined, Usual
	}
}

const object2 = {
	Width: 100,
	Height: 200,
	typeOfObject: "Figures", //Textbox, примитивы, image
	xCoordinate: 10,
	yCoordinate: 20,
	data: {
		color: "#fff",
		colorOfStroke: "#000",
		opacity: 1,
		typeOfFigure: "Circle",
	}
}

const Slide1 = {
	objects: [object1, object2],
	idSlide: 1,
	background: "#FFF",
}

const Presentation = {
	slides: [Slide1],
	nameOfPresentation: "AbobaPresa",
	selectedSlide: {
		slide: [Slide1],
		selectedObjects: [object1],
	},
}

// const Textbox =
// {
//     colorOfText,
// 	colorOfBackground,
// 	text,
// 	font,
// 	textSize,
// 	styleOfText, //Bold, Italic, Underlined, Usual
// }
//
// const Figures =
// {
//     color,
// 	colorOfStroke,
// 	opacity,
// }
//
// const Image =
// {
//     opacity,
// }
