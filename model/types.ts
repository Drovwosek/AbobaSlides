import {isArrayOf, isArrayOfString} from "../core/Array";

/*чтобы не выгружать выделенные дела с презентацией*/
type ApplicationState = {
	presentation: Presentation,
	selection: SelectionData,
}

type Presentation = {
	name: string,
	slides: Array<Slide>,
}

function isPresentation(object: any): object is Presentation {/*тайпгард смлекция*/
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
	objects: Array<ISlideObject>,
	background: string,
}

function isSlide(object: any): object is Slide {
	const hasId = typeof object.id === 'string'
	const hasObjects = isArrayOf<ISlideObject>(object.slides, isSlideObject)
	const hasBackground = typeof object.background == 'string'

	return hasId && hasObjects && hasBackground
}

/*!ОСТОРОЖНО! ПРИМЕНЯЕТСЯ ?НАСЛЕДОВАНИЕ?*/
interface ISlideObject { // I - inteaface
	id: string,
	width: number,
	height: number,
	x: number,
	y: number,
}

function isSlideObject(object: any): object is ISlideObject {
	const hasId = typeof object.id === 'string'
	const hasWidth = typeof object.width === 'number'
	const hasHeight = typeof object.height === 'number'
	const hasX = typeof object.x === 'number'
	const hasY = typeof object.y === 'number'

	return hasId && hasWidth && hasHeight && hasX && hasY
}

type Textbox = ISlideObject & {
	textColor: string,
	backgroundColor: string,
	text: string,
	font: string,
	textSize: number,
	textStyle: 'bold' | 'italic' | 'underlined' | 'normal',
	alignment: 'left' | 'center' | 'right',
}

function createTextbox(): Textbox{
	return {
		id: "8===>",
		width: 100,
		height: 100,
		x: 250,
		y: 250,

		textColor: "#000",
		backgroundColor: "#fff",
		text: "yoBA",
		font: "IBM Plex",
		textSize: 36,
		textStyle:  'normal',
		alignment: 'left',
	}
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

type FigureType = 'ellipse' | 'triangle' | 'rectangle'

type Figure = ISlideObject & { //I - interface
	color: string,
	strokeColor: string,
	opacity: number,
	type: FigureType,
}

function createFigure(figureType: FigureType): Figure{
	return {
		id: "8===>",
		width: 100,
		height: 100,
		x: 250,
		y: 250,
		color: "fff",
		strokeColor: "dcdcdc",
		opacity: 0,
		type: figureType,
	}
}

function isFigure(object: any): object is Figure {
	const hasColor = typeof object.color === 'string'
	const hasStrokeColor = typeof object.strokeColor === 'string'
	const hasOpacity = typeof object.opacity === 'number'
	const hasType = typeof object.type === 'string'

	return isSlideObject(object) && hasColor && hasStrokeColor && hasOpacity && hasType
}

type Image = ISlideObject & { /*см фигму*/
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
	ISlideObject,
	FigureType,
	Figure,
	Image,
	Textbox,
}

export {
	isPresentation,
	createTextbox,
	isTextbox,
	createFigure,
	isFigure,
	isImage,
	createEmptySelection,

}
