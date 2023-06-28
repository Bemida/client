//Creator : didi
function Shelf({ dimensions, material, position={X:0,Y:0,Z:0} }) {
  const thickness = 0.02
  console.log(Shelf);
  return (

    <mesh
      position={[position.X,position.Y, position.Z]}
    >
      <meshBasicMaterial color={0xf0001f} />
      <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z]} />
    </mesh >
  )
}
export default Shelf