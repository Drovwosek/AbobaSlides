const presa: Presentation =
{
    slides: [slide1, slideN],
	selectedSlide: {
	    slide: slides[0],
		selectedObjects: [Rect, img, TextBox],
	},
	nameOfPresentation: "AbobaPesentation",
}

const slide1: Slide = 
{
    objects: [Rect, Circle],
	background: "#fff",
}

const slideN: Slide = 
{
    objects: [],
	background: "#000",
}

const Rect: Obj =
{
    width: 101,
	height: 202,
	typeOfObject: "Figures",
	xCoordinate: 10,
	yCoordinate: 20,
}

const TextBox: Obj =
{
	width: 101,
	height: 202,
	typeOfObject: "Figures",
	xCoordinate: 130,
	yCoordinate: 120,
    // colorOfText: "#dc",
	// colorOfBackgroung: "#000",
	// textBlock: "amogus",
	// font: "IBM Plex",
	// textSize: 8,
}

const img: Obj = 
{
	width: 101,
	height: 202,
	typeOfObject: "Figures",
	xCoordinate: 210,
	yCoordinate: 220,
	//opacity: 90,
    //path: "iڱu(u+",
}
