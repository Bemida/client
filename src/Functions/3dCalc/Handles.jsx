import { useGLTF } from "@react-three/drei";
const { nodes, materials } = useGLTF("client/public/assets/3dModels/Closet4Doors.glb");


export default function Handles(width, height, depth, doorsNumber, woodWidth = 1) {
    const positionalRatio = 2; // Between door and handle
    let isLeftDoor = 1; // is left door
    const doorWidth = width / doorsNumber;
    let lastXposition = woodWidth; // start from (0, 0, 0)
    const xPosition = isLeftDoor ? doorWidth - positionalRatio : width - doorWidth + positionalRatio;
    const yPosition = height > 135 ? 130 : height - 5;
    const handels = Array.from({ length: doorsNumber }, (_, i) => i + 1);
    handels.map(number => {
        return (
            <>
                < mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.handle2.geometry}
                    material={materials.chrome}
                    position={[xPosition, yPosition, depth]}
                    rotation={[0, -1.571, 0]}
                />
                {isLeftDoor = number % 2 === 0}
                {lastXposition += doorWidth}
            </>
        )
    })

    return handels;
}
