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
	alignment: "left",
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

const selection = {
	slideIds: ["1"],
	objectIds: ["2"],
}

const presentation = {
	slides: [slide1],
	name: "AbobaPresa",
}

const application = {
	presentation: presentation,
	selection: selection,
}

