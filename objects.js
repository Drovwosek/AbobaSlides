const textbox = {
	id: "1",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	textColor: "#660c0c",
	backgroundColor: "#fff",
	text: "Abob",
	font: "Open Sans",
	textSize: 1009,
	textStyle: "Usual", //Bold, Italic, Underlined, Usual
}

const rect = {
	id: "2",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	strokeColor: "#000",
	opacity: 1,
	type: "Rectangle"
}

const slide1 = {
	objects: [textbox, rect],
	id: "1",
	background: "#FFF",
}

const presentation = {
	slides: [slide1],
	name: "AbobaPresa",
	selection: {
		slideIds: ["1"],
		objectIds: ["2"],
	},
}
