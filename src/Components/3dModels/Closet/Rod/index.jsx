function Rod({ position, dimensions, thickness, material }) {
    const height = (dimensions.Y > 1.68) ? 0.8 : (dimensions.Y / 2) - 0.08;

    return (
        <mesh
            castShadow
            receiveShadow
            material={material}
            position={[
                dimensions.X / 2,
                height,
                0
            ]}
            rotation={[0, 0, -Math.PI / 2]}
        >
            <cylinderGeometry args={[0.025, 0.025, (dimensions.X - (thickness * 2))]} />
        </mesh>
    )
}
export default Rod