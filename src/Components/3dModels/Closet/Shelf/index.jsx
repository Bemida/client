//Creator : didi
function Shelf({ dimensions, material }) {
  const thickness = 0.02

  return (

    <mesh
      position={[(dimensions.X / 2), 0, -thickness/2]}
      castShadow
      receiveShadow
      material={material}
    >
      <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - thickness]} />
    </mesh >
  )
}
export default Shelf