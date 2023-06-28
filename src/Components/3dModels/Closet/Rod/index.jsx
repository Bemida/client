function Rod(position, dimensions, thickness, material) {
 
    return (
        <mesh
            castShadow
            receiveShadow
            material={material}
            position={[1, 1, 1]}
        >
            <cylinderGeometry args={[10.025, 10.025, [dimensions.X - (thickness * 2)]]} />
        </mesh>
    )
}
export default Rod