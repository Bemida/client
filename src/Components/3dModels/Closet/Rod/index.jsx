function Rod({ position, dimensions, thickness, material }) {
    return (
        <mesh
            castShadow
            receiveShadow
            material={material}
            position={[dimensions.X / 2, dimensions.Y / 2 - 0.6, 0]}
            rotation={[0, 0, -Math.PI / 2]}
        >
            <cylinderGeometry args={[0.025, 0.025, (dimensions.X - (thickness * 2))]} />
        </mesh>
    )
}
export default Rod