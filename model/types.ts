import {isArrayOf, isArrayOfString} from "../core/Array";

type ApplicationState = {
	presentation: Presentation,
	selection: SelectionData,
}

type Presentation = {
	name: string,
	slides: Array<Slide>,
}

function isPresentation(object: any): object is Presentation {
	const hasName = typeof object.name === 'string'
	const hasSlides = isArrayOf<Slide>(object.slides, isSlide)
	const hasSelection = isSelection(object.selection)

	return hasName && hasSlides && hasSelection
}

type SelectionData = {
	slideIds: Array<string>,
	objectIds: Array<string>
}

function createEmptySelection(): SelectionData { /*вынести в отдельный файл*/
	return {
		slideIds: [],
		objectIds: []
	}
}

function isSelection(object: any): object is Selection {
	const hasSlideIds = isArrayOfString(object.slideIds)
	const hasObjectIds = isArrayOfString(object.objectIds)

	return hasSlideIds && hasObjectIds
}

type Slide = {
	id: string,
	objects: Array<SlideObject>,
	background: string,
}

function isSlide(object: any): object is Slide {
	const hasId = typeof object.id === 'string'
	const hasObjects = isArrayOf<SlideObject>(object.slides, isSlideObject)
	const hasBackground = typeof object.background == 'string'

	return hasId && hasObjects && hasBackground
}

/*!ОСТОРОЖНО! ПРИМЕНЯЕТСЯ НАСЛЕДОВАНИЕ*/
interface SlideObject {
	id: string,
	width: number,
	height: number,
	x: number,
	y: number,
}

function isSlideObject(object: any): object is SlideObject {
	const hasId = typeof object.id === 'string'
	const hasWidth = typeof object.width === 'number'
	const hasHeight = typeof object.height === 'number'
	const hasX = typeof object.x === 'number'
	const hasY = typeof object.y === 'number'

	return hasId && hasWidth && hasHeight && hasX && hasY
}

type Textbox = SlideObject & {
	textColor: string,
	backgroundColor: string,
	text: string,
	font: string,
	textSize: number,
	textStyle: 'bold' | 'italic' | 'underlined' | 'normal',
	alignment: 'left' | 'center' | 'right',
}

function isTextbox(object: any): object is Textbox {
	const hasTextColor = typeof object.textColor === 'string'
	const hasBackgroundColor = typeof object.backgroundColor === 'string'
	const hasText = typeof object.text  === 'string'
	const hasFont = typeof object.font === 'string'
	const hasTextSize = typeof object.textSize === 'number'
	const hasTextStyle = typeof object.textStyle === 'string'
	const hasAlignment = typeof object.alignment === 'string'

	return isSlideObject(object) && hasTextColor && hasBackgroundColor && hasText && hasFont && hasTextSize && hasTextStyle && hasAlignment
}

type Figure = SlideObject & {
	color: string,
	strokeColor: string,
	opacity: number,
	type: 'circle' | 'triangle' | 'rectangle',
}

function isFigure(object: any): object is Figure {
	const hasColor = typeof object.color === 'string'
	const hasStrokeColor = typeof object.strokeColor === 'string'
	const hasOpacity = typeof object.opacity === 'number'
	const hasType = typeof object.type === 'string'

	return isSlideObject(object) && hasColor && hasStrokeColor && hasOpacity && hasType
}

type Image = SlideObject & {
	opacity: number,
	src: string,
}

function isImage(object: any): object is Image {
	const hasOpacity = typeof object.opacity === 'number'
	const hasSRC = typeof object.src === 'string'

	return isSlideObject(object) && hasOpacity && hasSRC
}

export type {
	ApplicationState,
	Presentation,
	SelectionData,
	Slide,
	SlideObject, //Obj -> SlideObject
	Figure,
	Image, //Img -> Image
	Textbox,
}

export {
	isPresentation,
	isTextbox,
	isFigure,
	isImage,
	createEmptySelection,
}
