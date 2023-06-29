//Creator : didi
function Shelf({ dimensions, material, position={X:0,Y:0,Z:0} }) {
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