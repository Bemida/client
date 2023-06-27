import { useGLTF } from "@react-three/drei";


export default function Handles({ width, height, depth, doorsNumber = 4, woodWidth = 0.1 }) {
    const { nodes, materials } = useGLTF('/assets/3dModels/ironHandle.glb')
    depth += woodWidth;
    let isLeftDoor = 1; // is left door
    const doorWidth = width / doorsNumber; // 1 / 4 = .25
    const positionalRatio = doorWidth / 0.25; // Between door and handle
    let lastXposition = 0; // start from (0, 0, 0)
    let xPosition = 0;
    //      .25 - 0.2 = 0.05 : 1 - .25 + 0.2 = 0.55
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
                    geometry={nodes.handle.geometry}
                    material={materials.chrome}
                    position={[0, yPosition, depth]}
                />
                {xPosition = isLeftDoor ? lastXposition + doorWidth - positionalRatio : lastXposition + width - doorWidth + positionalRatio}
                {isLeftDoor = (number + 1) % 2 === 0}
                {lastXposition += xPosition}
                {console.log(isLeftDoor, lastXposition)}
            </>
        )
    })

    return handles;
}
