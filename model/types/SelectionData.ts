export type SelectionData = {
    slideId: string,
    objectIds: Array<string>,
}/*массив объектов при выделенных слайдов?*/

type SelectionConfig = {
    slideId?: string,
    objectIds?: Array<string>,
}

const defaultConfig: SelectionConfig = {
    slideId: '',
    objectIds: [],
}
function createSelection(config: SelectionConfig = defaultConfig): SelectionData {
    return {
        slideId: config.slideId || '',
        objectIds: config.objectIds || [],
    }
}

export {
    createSelection,
}
