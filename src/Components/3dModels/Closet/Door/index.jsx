import Handle from "../Handle";

//Creator : didi
function Door({ position, dimensions, material, side = "left", isSingular = false }) {
  const thickness = 0.02;
  const SingularDoor = isSingular ? 2 : 1;
  function rightPosition() {
    return ((dimensions.X * 0.75) * SingularDoor)
  }
  function leftPosition() {
    return ((dimensions.X / 4) * SingularDoor)
  }

  console.log("door:", position, dimensions);

  return (
    <group
      position={[(side == "right") ? rightPosition() : leftPosition(), 0, (dimensions.Z / 2) - (thickness / 2)]}

    >
      <mesh
        position={[
          position.X,
          position.Y,
          position.Z
        ]}
        castShadow
        receiveShadow
        material={material}
      >

        <boxGeometry args={[((dimensions.X * SingularDoor - thickness / 4)) / 2, dimensions.Y, thickness]} />
      </mesh >
      <Handle
        position={[
          (isSingular) ? -dimensions.X / 4 : (side == "right") ? -dimensions.X / 8 : dimensions.X / 8,
          position.Y,
          0
        ]}
        dimensions={dimensions} />
    </group>
  )
}
export default Door