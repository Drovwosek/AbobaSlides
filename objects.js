const textbox = {
	id: "1",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	textColor: "#660c0c",
	backgroundColor: "#fff",
	text: "Aboba",
	font: "Open Sans",
	textSize: 1009,
	textStyle: "Normal", //Bold, Italic, Underlined, Normal
	alignment: "left",
}

const rectangle = {
	id: "2",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	strokeColor: "#dcdcdc",
	opacity: 1,
	type: "Rectangle"
}

const slide1 = {
	objects: [textbox, rectangle],
	id: "1",
	background: "#fff",
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
