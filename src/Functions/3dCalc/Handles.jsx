import { array } from "prop-types";


export default function Handles({ width, height, depth, doorsNumber, woodWidth = 0.1, nodes, materials }) {

    const positionalRatio = 0.2; // Between door and handle
    let isLeftDoor = 1; // is left door
    const doorWidth = width / doorsNumber; // 1.6 / 4 = .4
    let lastXposition = woodWidth; // start from (0, 0, 0)
    const xPosition = isLeftDoor ? doorWidth - positionalRatio : width - doorWidth + positionalRatio;
    const yPosition = height > 1.35 ? 1.3 : height - 0.5;
    const handlesNumbers = Array.from(Array(doorsNumber).keys());

    console.log([xPosition, yPosition, depth]);
    const handles = handlesNumbers.map(number => {
        return (
            <>
                < mesh
                    key={number + 1}
                    castShadow
                    receiveShadow
                    geometry={nodes.handle2.geometry}
                    material={materials.chrome}
                    position={[.38, yPosition, depth]}
                    rotation={[0, 0, 0]}
                />
                {isLeftDoor = (number + 1) % 2 === 0}
                {lastXposition += doorWidth}
                {console.log(isLeftDoor, lastXposition)}
            </>
        )
    })

    return handles;
}
