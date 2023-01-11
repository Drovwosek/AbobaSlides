import jsPDF from "jspdf";
import { Slide } from "../model/types/presentationTypes/Slide";
import { Figure, isFigure } from "../model/types/presentationTypes/slideObjects/Figure";
import { Image, isImage } from "../model/types/presentationTypes/slideObjects/Image";
import { isTextbox, Textbox } from "../model/types/presentationTypes/slideObjects/Textbox";
import { ISlideObject } from "../model/types/presentationTypes/slideObjects/ISlideObject";
import store from "../store/store";
import CanvasTextWrapper from 'canvas-text-wrapper';

function setBackgroundImage(doc: jsPDF, image: string) {
    doc.addImage (
        image,
        'jpg',
        0,
        0,
        1200,
        674,
    );
}

function setBackgroundColor(doc: jsPDF, color: string) {
    doc.setFillColor(color)
    doc.rect(
        0,
        0,
        1200,
        674,
        'FD'
    );
}

function addTextBox(doc: jsPDF, object: Textbox) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        const text = object.text;
        const width = object.width;
        const height = object.height;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = object.textColor;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = 4;
        CanvasTextWrapper.CanvasTextWrapper(canvas, text, {
            font: `${object.styles.italic ? 'italic' : ''} ${object.styles.bold ? 'bold' : ''} ${object.textSize}px ${object.font}`,
            textDecoration: object.styles.underlined ? 'underline' : 'none',
            textAlign: object.alignment,
            paddingY: object.styles.underlined ? 12 : 0
        });
        const base64 = canvas.toDataURL();
        doc.addImage(
            base64,
            'PNG',
            object.x,
            object.y,
            width,
            height
        )
    }
}

function addRect(doc: jsPDF, object: Figure, mode: string) {
    doc.rect(
        object.x,
        object.y,
        object.width,
        object.height,
        mode);
}

function addTriangle(doc: jsPDF, object: Figure, mode: string) {
    doc.triangle(object.x + object.width / 2,
        object.y,
        object.x,
        object.y + object.height,
        object.x + object.width,
        object.y + object.height,
        mode);
}

function addEllipse(doc: jsPDF, object: Figure, mode: string) {
    doc.ellipse(
        object.x + object.width / 2,
        object.y + object.height / 2,
        object.width / 2,
        object.height / 2,
        mode);
}

function addFigure(doc: jsPDF, object: Figure) {
    doc.setDrawColor(object.strokeColor);
    doc.setFillColor(object.color)
    const drawingMode = 'FD'; //DrawFill

    if (object.type === 'rectangle') {
        addRect(doc, object, drawingMode);
    } else if (object.type === 'triangle') {
        addTriangle(doc, object, drawingMode);
    } else if (object.type === 'ellipse') {
        addEllipse(doc, object, drawingMode);
    }
}

async function addObjectOnPage(doc: jsPDF, object: ISlideObject) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        if (isTextbox(object)) {
            addTextBox(doc, object);
        }
        if (isFigure(object)) {
            addFigure(doc, object);
        } else if (isImage(object)) {
            const base64 = object.src;
            addImage(doc, object, base64);
        }

        resolve({})
    });
}

function addImage(doc: jsPDF, object: Image, base64: string) {
    doc.addImage(
        base64,
        'PNG',
        object.x,
        object.y,
        object.width,
        object.height
    );
}

async function addObjectsOnPage(doc: jsPDF, objects: Array<ISlideObject>) {
    const promises = objects.map(async (slideObject) => {
        return addObjectOnPage(doc, slideObject);
    });
    await Promise.all(promises);
}


async function addSlides(doc: jsPDF, slides: Array<Slide>) {
    for (let i = 0; i < slides.length; i++) {
        console.log('addSlide')
        const slide = slides[i];
        if (typeof (slide.background) === 'string')
        {
            setBackgroundColor(doc, slide.background)
        }
        else
        {
            await setBackgroundImage(doc, slide.background.src);
        }
        console.log('addObjectOnSlide')
        await addObjectsOnPage(doc, slide.objects);
        doc.addPage();
    }
}

export async function exportPDF() {
    const slideSize = [1200, 674];
    const doc = new jsPDF({
        unit: "px",
        orientation: 'l',
        format: slideSize,
    });
    await addSlides(doc, store.getState().presentation.slides);
    doc.deletePage(doc.getNumberOfPages());
    console.log('pam pam')
    doc.save(`${store.getState().presentation.name}.pdf`);
}