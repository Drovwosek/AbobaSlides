type Presentation = {
	name: string,/*имя презентации*/
	slides: Array<Slide>,
	selection: {/*выделение*/
		slideIds: Array<string>,
		objectIds: Array<string>
	}
}

type Slide = {
	id: string,
    objects: Array<SlideObject>,
	background: string,
}

/* !ОСТОРОЖНО! ПРИМЕНЯЕТСЯ НАСЛЕДОВАНИЕ*/
interface SlideObject { /* рамка */
	id: string,
	width: number,
	height: number,
	x: number,
	y: number,
}

type Textbox = SlideObject & {
    textColor: string,
	backgroundColor: string,
	text: string,
	font: string,
	textSize: number,
	textStyle: 'bold' | 'italic' | 'underlined' | 'normal',
}

type Figure = SlideObject & {
    color: string,
	strokeColor: string,
	opacity: number,
	type: 'circle' | 'triangle' | 'rectangle',
}

type Image = SlideObject & {
    opacity: number,
	src: string,
}

export type {
	Presentation,
	Slide,
	SlideObject, //Obj -> SlideObject
	Figure,
	Image, //Img -> Image
	Textbox
}
