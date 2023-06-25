import { Canvas } from "@react-three/fiber"
import { Closet4Doors } from "../3dModels/Closet4Doors"
import { OrbitControls } from "@react-three/drei"

function Viewer3d() {
  return (
    <Canvas>
      <spotLight position={[-3,10,5]} />
      <OrbitControls />
      <Closet4Doors />
    </Canvas>
  )
}
export default Viewer3d