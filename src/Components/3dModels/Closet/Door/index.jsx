import Handle from "../Handle";

//Creator : didi
function Door({ dimensions, material, side = "left", isSingular = false }) {
  const thickness = 0.02;
  const SingularDoor = isSingular ? 2 : 1;
  function rightPosition() {
    return [(dimensions.X * 0.75) * SingularDoor, 0, (dimensions.Z / 2) - (thickness / 2)]
  }
  function leftPosition() {
    return [(dimensions.X / 4) * SingularDoor, 0, (dimensions.Z / 2) - (thickness / 2)]
  }
  return (
    <group
      position={(side == "right") ? rightPosition() : leftPosition()}

    >
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        material={material}
      >

        <boxGeometry args={[((dimensions.X * SingularDoor- thickness/4)) / 2 , dimensions.Y, thickness]} />
      </mesh >
      <Handle
        position={[
          (isSingular) ? -dimensions.X / 4 : (side == "right") ? -dimensions.X / 8 : dimensions.X / 8,
          0,
          0
        ]}
        dimensions={dimensions} />
    </group>
  )
}
export default Door