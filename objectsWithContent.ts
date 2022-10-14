import {Presentation, Slide, Textbox, Image} from "./types";

const textbox: Textbox = {
	id: "1",
	width: 101,
	height: 202,
	x: 130,
	y: 120,
	textColor: "#000",
	backgroundColor: "#000",
	text: "Test text data",
	font: "IBM Plex",
	textSize: 18,
	textStyle: 'bold',
}

const image: Image = {
	id: "2",
	width: 101,
	height: 202,
	x: 210,
	y: 220,
	opacity: 90,
	src: "base64encodedimage",
}


const firstSlide: Slide = {
	id: "3",
	objects: [textbox, image],
	background: "#fff",
}

const secondSlide: Slide = {
	id: "4",
	objects: [],
	background: "#000",
}

const presentation: Presentation =
{
	name: "Presentation Example",
    slides: [firstSlide, secondSlide],
	selection: {
	    slideIds: ["3"],
		objectIds: ["2"],
	},
}
