import { useGLTF } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";

function FloorFrame({ dimensions }) {
  const materialText = useContext(DataContext).fullOrder.color || "אורן"
  const materialType = (materialText === "אורן") ? "wood" : (materialText === "לבן") ? "white" : "chrome";
  const material = useGLTF('/assets/3dModels/Materials.glb').materials[materialType],
    thickness = 0.02;
  console.log(useContext(DataContext));
  return (
    <group>
      <mesh
        castShadow
        receiveShadow
        material={material}
        position={[dimensions.X / 2, -dimensions.Y / 2 + (0.1 / 2), 0]}
      >
        <boxGeometry args={[dimensions.X, 0.1, dimensions.Z]} />
      </mesh>
    </group>
  )
}
export default FloorFrame