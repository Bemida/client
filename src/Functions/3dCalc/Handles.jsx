import { array } from "prop-types";


export default function Handles({ width, height, depth, doorsNumber, woodWidth = 1, nodes, materials }) {

    const positionalRatio = 2; // Between door and handle
    let isLeftDoor = 1; // is left door
    const doorWidth = width / doorsNumber;
    let lastXposition = woodWidth; // start from (0, 0, 0)
    const xPosition = isLeftDoor ? doorWidth - positionalRatio : width - doorWidth + positionalRatio;
    const yPosition = height > 1.35 ? 1.3 : height - 5;
    const handels = Array.from(Array(doorsNumber).keys());

    console.log();
    return handels.map(number => {
        return (
            <>
                < mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle2.geometry}
                    material={materials.chrome}
                    position={[xPosition, yPosition, depth]}
                    rotation={[0, 0, 0]}
                />
                {isLeftDoor = number % 2 === 0}
                {lastXposition += doorWidth}
            </>
        )
    })

    return handels;
}
