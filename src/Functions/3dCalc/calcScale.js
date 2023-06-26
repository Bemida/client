export function calcScale(defaultDimensions, inputDimenstions) {
    const ratio = [
        inputDimenstions[0] / defaultDimensions[0],
        inputDimenstions[1] / defaultDimensions[1],
        inputDimenstions[2] / defaultDimensions[2]
    ]
    return (ratio);
}


