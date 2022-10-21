export type SelectionData = {
    slideIds: Array<string>,
    objectIds: Array<string>
}

function createEmptySelection(): SelectionData { /*вынести в отдельный файл*/
    return {
        slideIds: [],
        objectIds: []
    }
}

export {
    createEmptySelection,
}
