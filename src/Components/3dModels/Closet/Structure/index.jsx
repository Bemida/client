

function Structure({ dimensions, material, position = { X: 0, Y: 0, Z: 0 } }) {
    const thickness = 0.02;
    const thicknessBack = 0.003;
    return (
        <group

            position={[position.X, position.Y, position.Z]}
        >
            {/* left: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[thickness / 2, 0, -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z - thickness]} />
            </mesh>
            {/* top: */}
            <mesh
                castShadow
                // receiveShadow
                material={material}
                position={[(dimensions.X / 2), (dimensions.Y / 2) - (thickness / 2), -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - (thickness)]} />
            </mesh>
            {/* right: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[dimensions.X - (thickness / 2), 0, -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z - thickness]} />
            </mesh>
            {/* bottom: */}
            <mesh
                // castShadow
                receiveShadow
                material={material}
                position={[(dimensions.X / 2), (-dimensions.Y / 2) + (thickness / 2), (-thickness / 2)]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - thickness]} />
            </mesh >
            {/* back: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[(dimensions.X / 2), 0, (-dimensions.Z / 2) - (thicknessBack / 2)]}
            // position={[0.5, 0, -0.3]}
            // position={[2,2,2]}
            >
                {/* <meshBasicMaterial color={0x0000ff} /> */}
                <boxGeometry args={[dimensions.X, dimensions.Y, thicknessBack]} />
            </mesh >
        </group>
    )
}
export default Structure