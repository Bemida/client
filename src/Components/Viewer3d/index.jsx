import { Canvas } from "@react-three/fiber"
import { Closet4Doors } from "../3dModels/Closet4Doors"
import { OrbitControls } from "@react-three/drei"

function Viewer3d() {
  return (
    <Canvas style={{ width: '800px', height: '600px' }} camera={{ fov: 40 }}>
      <spotLight position={[-3, 10, 5]} />
      <ambientLight intensity={0.4} />
      <OrbitControls />
      <Closet4Doors />
    </Canvas>
  )
}
export default Viewer3d