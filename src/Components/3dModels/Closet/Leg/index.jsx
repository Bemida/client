function Leg({position = [0, 0, 0], material}) {
  const dimensions = {
    X: 0.05,
    Y: 0.1,
    Z: 0.05
  }
  return (
    <mesh
      material={material}
      position={position}
    >

      <cylinderGeometry args={[dimensions.X, dimensions.X, dimensions.Y]} />
    </mesh>
  )
}
export default Leg