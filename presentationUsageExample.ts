import {Slide} from "./model/types/presentationTypes/Slide";
import {Textbox} from "./model/types/presentationTypes/slideObjects/Textbox";
import {Image} from "./model/types/presentationTypes/slideObjects/Image";
import {Presentation} from "./model/types/presentationTypes/Presentation";
import {ApplicationState} from "./model/types/Application";
import {SelectionData} from "./model/types/SelectionData";
import {Figure} from "./model/types/presentationTypes/slideObjects/Figure";

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
	styles: {
		bold: false,
		italic: true,
		underlined: false,
	},
	alignment: "left",
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

const rectangle: Figure = {
	id: "2",
	width: 100,
	height: 200,
	x: 10,
	y: 20,
	color: "#fff",
	strokeColor: "#dcdcdc",
	opacity: 1,
	type: "rectangle"
}

const firstSlide: Slide = {
	id: "3",
	objects: [textbox, image],
	background: "#fff",
}

const secondSlide: Slide = {
	id: "4",
	objects: [rectangle],
	background: "#000",
}

const presentation: Presentation = {
	name: "Presentation Example",
    slides: [firstSlide, secondSlide],
}

const selection: SelectionData = {
	slideId: "3",
	objectIds: ["1"],
}

const app: ApplicationState = {
	presentation: presentation,
	selection: selection,
}