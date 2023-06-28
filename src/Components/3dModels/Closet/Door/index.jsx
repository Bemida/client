//Creator : didi
function Door({ dimensions, material, side = "left", isSingular = false }) {
  const thickness = 0.02;
  const SingularDoor = isSingular ? 2 : 1;
  console.log(SingularDoor);
  function rightPosition() {
    return [(dimensions.X * 0.75) * SingularDoor, 0, (dimensions.Z / 2) - (thickness / 2)]
  }
  function leftPosition() {
    return [(dimensions.X / 4) * SingularDoor, 0, (dimensions.Z / 2) - (thickness / 2)]
  }
  return (
    <mesh
      position={(side == "right") ? rightPosition() : leftPosition()}
      castShadow
      receiveShadow
      material={material}
    >

      <boxGeometry args={[((dimensions.X * SingularDoor) - thickness) / 2, dimensions.Y, thickness]} />
    </mesh >)
}
export default Door