import { useGLTF } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";

function Handle({ position, dimensions }) {
  const handleId = useContext(DataContext).newFakeData.orders.handleId
  const {materials} = useGLTF("/assets/3dModels/Materials.glb")
  function getFile() {
    switch (handleId) {
      case "5678": {
        return useGLTF('/assets/3dModels/ironHandle.glb');
        break
      }
      case "1234": {
        return useGLTF('/assets/3dModels/circleHandle.glb');
        break
      }
      default:
        return useGLTF('/assets/3dModels/ironHandle.glb');

    }
  }
  const { nodes } = getFile()

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.handle.geometry}
      material={materials.chrome}
      position={position}
    />
  )
}
export default Handle

useGLTF.preload("/assets/3dModels/ironHandle.glb");
useGLTF.preload("/assets/3dModels/Materials.glb")