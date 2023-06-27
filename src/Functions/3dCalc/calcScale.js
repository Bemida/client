export function initScale(defaultDimensions, inputDimenstions) {
    const ratio = {
        X: inputDimenstions[0] / defaultDimensions[0],
        Y: inputDimenstions[1] / defaultDimensions[1],
        Z: inputDimenstions[2] / defaultDimensions[2]
    }
    return (ratio);
} export function calcPosition(initPosition, scale) {
    return [
        initPosition[0] * scale[0],
        initPosition[1] * scale[1],
        initPosition[2] * scale[2]
    ]
} export function calcScale(initScale, scale) {
    return [
        initScale * scale[0],
        initScale * scale[1],
        initScale * scale[2]
    ]
} export function snapGaps(direction, width, scale, initialPosition = [0, 0, 0], switcher = [0, 0, 0]) {
    return [
        initialPosition[0] + switcher[0] * ((((width * calcScale(1, [1, scale.X, 1])[1]) - width) * Number(`${direction}1`)) / 2),
        initialPosition[1] + switcher[1] * ((((width * calcScale(1, [1, scale.Y, 1])[1]) - width) * Number(`${direction}1`)) / 2),
        initialPosition[2] + switcher[2] * ((((width * calcScale(1, [1, scale.Z, 1])[1]) - width) * Number(`${direction}1`)) / 2),
    ]
}