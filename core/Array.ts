// Автор: Ростислав Глизерин
// эти универсальные тайпгарды - лучшее, что было написано им за весь опыт его программирования

function isArrayOf<T>(arr: unknown, typeGuardFn: (obj: unknown) => obj is T): arr is Array<T> {
    if (!Array.isArray(arr)) {
        return false
    }

    let isArrayOfT = true

    arr.forEach(elem => (isArrayOfT = isArrayOfT && typeGuardFn(elem)))

    return isArrayOfT
}


function isArrayOfString(arr: unknown): arr is Array<string> {
    return isArrayOf<string>(arr, (str: unknown): str is string => typeof str === 'string')
}

export {
    isArrayOf,
    isArrayOfString,
}