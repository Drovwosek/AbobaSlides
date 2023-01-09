import React, {ReactNode, useState} from 'react'
import styles from "./Slide.module.css"
import {isImageBackground, Slide as SlideData} from "../../../src/model/types/presentationTypes/Slide"
import {isFigure} from "../../model/types/presentationTypes/slideObjects/Figure"
import {isImage} from "../../model/types/presentationTypes/slideObjects/Image"
import {FigureView} from "../objects/Figure"
import {Image} from "../objects/Image"
import {isTextbox} from "../../model/types/presentationTypes/slideObjects/Textbox"
import {Textbox} from "../objects/Textbox"
import store from '../../store/store'
import { createSlide, deleteSlide, setImageBackground } from '../../store/actionCreators'
import { loadImageFromDisk, imageUrlToBase64 } from '../../core/ImageLoader'


type SlideProps = {
  slide: SlideData,
  selectObjectIds: Array<string>,
}

function getSlideObject(slide: SlideData, selectedObjectIds: Array<string>): Array<ReactNode> {
    let objects: Array<ReactNode> = []

    slide.objects.forEach(obj => {
        if (isFigure(obj)) {
            objects.push(
                <FigureView 
                     key={obj.id}
                     figure={obj}
                     selected={(selectedObjectIds.includes(obj.id))}
                />
            )
        } 
        else 
        {
            if (isImage(obj)) {
                objects.push(
                    <Image 
                        key={obj.id}
                        image={obj}
                        selected={selectedObjectIds.includes(obj.id)}
                    />
                )
            }
            else
            {
                if (isTextbox(obj)) {
                    objects.push(
                        <Textbox 
                            key={obj.id}
                            textbox={obj}
                            selected={selectedObjectIds.includes(obj.id)}
                        />
                    )
}
            }
        }
    })

    return objects
}

function setSlideBackground(slide: SlideData): string {
    let background = '#fff'
      
    if (isImageBackground(slide.background))
    {
        background = `url(${slide.background.src}) no-repeat center / 100%`
    }
    else
    {
        background = slide.background
    }


    return background
}

function Slide(props: SlideProps) {
    const [isShown, setIsShown] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})

    const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()

        setIsShown(false)

        setPosition({
            x: event.pageX,
            y: event.pageY,
        })

        setIsShown(true)
    }

    const hideContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsShown(false)
    }

    return (
        <div className = {styles.slide}
             style={{background: setSlideBackground(props.slide)}}
             onContextMenu={showContextMenu}
             onClick={hideContextMenu}
        >
            {getSlideObject(props.slide, props.selectObjectIds)}
            {isShown && (
                <div 
                    className={styles.contextMenu}
                    style={{top: position.y, left: position.x}}
                >
                    <div className={styles.contextMenuOption} onClick={() => {store.dispatch(createSlide())}}>
                        Add slide
                    </div>
                    <div className={styles.contextMenuPartition}></div>
                    <div className={styles.contextMenuOption} onClick={() => {store.dispatch(deleteSlide(props.slide.id))}}>
                        Delete slide
                    </div>
                    <div className={styles.contextMenuPartition}></div>
                    <div className={styles.contextMenuOption}
                         onClick={() => {
                            loadImageFromDisk().then(result => {
                                imageUrlToBase64(result.base64).then(result => {
                                    store.dispatch(setImageBackground(result.base64))
                                })
                            })
                         }} 
                    >
                        Set image background
                    </div>
                </div>
            )}
    </div>
  );
}

export default Slide;
