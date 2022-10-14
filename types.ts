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
	background: string,  //Создеём картину и растягиваем её по слайду
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
	textStyle: 'Bold' | 'Italic' | 'Underlined' | 'Usual',
}

type Figure = SlideObject & {
    color: string,
	strokeColor: string,
	opacity: number,
	type: 'Circle' | 'Triangle' | 'Rectangle',
}

type Image = SlideObject & {
    opacity: number,
    path: string,
}

export type {
	Presentation,
	Slide,
	SlideObject, //Obj -> SlideObject
	Figure,
	Image, //Img -> Image
	Textbox
}
