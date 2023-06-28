//Creator : didi
function Shelf({ dimensions, material }) {
  const thickness = 0.02

  return (

    <mesh
      position={[(dimensions.X / 2) - (thickness / 2), 0, 0]}
    >
      <meshBasicMaterial color={0xf0001f} />
      <boxGeometry args={[dimensions.X-(thickness*2), thickness, dimensions.Z]} />
    </mesh >
  )
}
export default Shelf