function Leg({ position = [0, 0, 0], material }) {
  const dimensions = {
    X: 0.03,
    Y: 0.1,
    Z: 0.03
  }
  return (
    <mesh
      castShadow
      receiveShadow
      material={material}
      position={[position.X, position.Y + (dimensions.Y / 2), position.Z]}
    >

      <cylinderGeometry args={[dimensions.X, dimensions.X, dimensions.Y]} />
    </mesh>
  )
}
export default Leg