import {generateId} from "./core/IdGenerater";

const textbox = {
	id: generateId(),
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	textColor: "#660c0c",
	backgroundColor: "#fff",
	text: "Aboba",
	font: "Open Sans",
	textSize: 1009,
	bold: false,
	italic: false,
	underlined: false,
	alignment: "left",
}

const rectangle = {
	id: generateId(),
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	strokeColor: "#dcdcdc",
	opacity: 1,
	type: "Rectangle"
}

const image = {
	id: generateId(),
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	opacity: 1,
	src: "qwiue",
}

const slide1 = {
	objects: [textbox, rectangle, image],
	id: generateId(),
	background: "#fff",
}

const selection = {
	slideId: slide1.id,
	objectIds: [image.id],
}

const presentation = {
	slides: [slide1],
	name: "AbobaPresa",
}

const application = {
	presentation: presentation,
	selection: selection,
}

export {
	application,
	presentation,
	selection,
	slide1,
	image,
	rectangle,
	textbox,
}