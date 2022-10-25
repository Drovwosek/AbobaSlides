export type SelectionData = {
    slideIds: Array<string>,
    objectIds: Array<string>,
}

type SelectionConfig = {
    slideIds?: Array<string>
    objectIds?: Array<string>,
}
const defaultConfig: SelectionConfig = {
    slideIds: [],
    objectIds: [],
}
function createSelection(config: SelectionConfig = defaultConfig): SelectionData { /*вынести в отдельный файл*/
    return {
        slideIds: config.slideIds || [],
        objectIds: config.objectIds || [],
    }
}

export {
    createSelection,
}
