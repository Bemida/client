export function initScale(defaultDimensions, inputDimenstions) {
    const ratio = {
        X: inputDimenstions[0] / defaultDimensions[0],
        Y: inputDimenstions[1] / defaultDimensions[1],
        Z: inputDimenstions[2] / defaultDimensions[2]
    }
    return (ratio);
}


export function calcPosition(initPosition, scale) {
    return [
        initPosition[0] * scale[0],
        initPosition[1] * scale[1],
        initPosition[2] * scale[2]
    ]
}

export function calcScale(initScale, scale) {
    return [
        initScale * scale[0],
        initScale * scale[1],
        initScale * scale[2]
    ]
}