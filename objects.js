const object1 = {
	id: "1",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	colorOfText: "#660c0c",
	colorOfBackground: "#fff",
	text: "Abob",
	font: "Open Sans",
	textSize: 1009,
	styleOfText: "Usual", //Bold, Italic, Underlined, Usual
}

const object2 = {
	id: "2",
	Width: 100,
	Height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	colorOfStroke: "#000",
	opacity: 1,
	typeOfFigure: "Circle",
}

const slide1 = {
	objects: [object1, object2],
	id: "1",
	background: "#FFF",
}

const presentation = {
	slides: [slide1],
	nameOfPresentation: "AbobaPresa",
	selectedSlide: {
		slide: [slide1],
		selectedObjects: [object1],
	},
}
