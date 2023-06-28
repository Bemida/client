//Creator : didi
function Shelf({ dimensions, material, position }) {
  const thickness = 0.02

  return (

    <mesh
      position={[position.X, position.Y, -thickness / 2]}
      castShadow
      receiveShadow
      material={material}
    >
      <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - thickness]} />
    </mesh >
  )
}
export default Shelf