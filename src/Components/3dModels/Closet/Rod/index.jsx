function Rod({ position, dimensions, thickness, material }) {
    const ROD_RADIUS = 0.025
    return (
        <mesh
            castShadow
            receiveShadow
            material={material}
            position={[
                position.X,position.Y,position.Z
            ]}
            rotation={[0, 0, -Math.PI / 2]}
        >
            <cylinderGeometry args={[ROD_RADIUS, ROD_RADIUS, (dimensions.X - (thickness * 2))]} />
        </mesh>
    )
}
export default Rod