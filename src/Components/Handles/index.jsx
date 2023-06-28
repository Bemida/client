import { useGLTF } from "@react-three/drei";

export default function Handles({ width, height, depth, doorsNumber = 4, woodWidth = 0.0165, scale }) {
    const { nodes, materials } = useGLTF('/assets/3dModels/ironHandle.glb')
    depth += woodWidth;
    let isLeftDoor = 1.5; // is left door
    const doorWidth = width / doorsNumber; // 1 / 4 = .25
    const positionalRatio = doorWidth * 0.2; // Between door and handle
    let xPosition = doorWidth - positionalRatio;
    const yPosition = height > 1.35 ? 1.3 : height - 0.5;
    const handlesNumbers = Array.from(Array(doorsNumber).keys()); // create array of handles numbers

    const handles = handlesNumbers.map(number => {
        return (
            <>
                < mesh
                    key={number + 1}
                    castShadow
                    receiveShadow
                    geometry={nodes.handle.geometry}
                    material={materials.chrome}
                    position={[xPosition, yPosition, depth]}
                />
                {isLeftDoor = (number + 1) % 2 === 0}
                {xPosition = isLeftDoor ? xPosition + (doorWidth * 0.8) * 2 : xPosition + positionalRatio * 2}
            </>
        )
    })

    return handles;
}
