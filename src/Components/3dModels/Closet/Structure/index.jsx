import { Color } from "three";
import Shelf from "../Shelf";

function Structure({ dimensions, material, position = { X: 0, Y: 0, Z: 0 } }) {
    const thickness = 0.02;
    const thicknessBack = 0.003;
    return (
        <group
            castShadow
            receiveShadow
            position={[position.X, position.Y, position.Z]}
        >
            {/* left: */}
            <mesh
                material={material}
                position={[0, 0, 0]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z]} />
            </mesh>
            {/* top: */}
            <mesh
                material={material}
                position={[(dimensions.X / 2) - (thickness / 2), (dimensions.Y / 2) - (thickness / 2), 0]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X, thickness, dimensions.Z]} />
            </mesh>
            {/* right: */}
            <mesh
                material={material}
                position={[dimensions.X - thickness, 0, 0]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z]} />
            </mesh>
            {/* bottom: */}
            <mesh
                material={material}
                position={[(dimensions.X / 2) - (thickness / 2), -dimensions.Y / 2, 0]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X, thickness, dimensions.Z]} />
            </mesh >
            {/* back: */}
            <mesh
                material={material}
                position={[(dimensions.X / 2) - (thickness / 2), 0, (-dimensions.Z / 2)]}
            // position={[0.5, 0, -0.3]}
            // position={[2,2,2]}
            >
                {/* <meshBasicMaterial color={0x0000ff} /> */}
                <boxGeometry args={[dimensions.X, dimensions.Y, thicknessBack]} />
            </mesh >
            <Shelf />
        </group>
    )
}
export default Structure