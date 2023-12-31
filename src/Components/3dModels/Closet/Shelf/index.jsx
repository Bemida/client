//Creator : didi
function Shelf({ dimensions, material, position = { X: 0, Y: 0, Z: 0 } }) {
  const thickness = 0.02
  return (

    <mesh
      castShadow
      receiveShadow
      position={[position.X, position.Y, position.Z]}
      material={material}
    >
      <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - thickness]} />
    </mesh >
  )
}
export default Shelf