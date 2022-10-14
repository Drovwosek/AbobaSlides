const textbox = {
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

const rect = {
	id: "2",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	colorOfStroke: "#000",
	opacity: 1,
}

const slide1 = {
	objects: [textbox, rect],
	id: "1",
	background: "#FFF",
}

const presentation = {
	slides: [slide1],
	nameOfPresentation: "AbobaPresa",
	selectedSlide: {
		slide: [slide1],
		selectedObjects: [textbox],
	},
}
