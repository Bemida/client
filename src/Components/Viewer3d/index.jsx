import { Canvas } from "@react-three/fiber"
import { Effects, OrbitControls, useGLTF } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import Scene3d from "../Scene3d";


function Viewer3d() {
  const context = useContext(DataContext)
  console.log(context);
  //camera work:
  const fov = 40;
  const dimensions = {
    X: context.newFakeData.orders.width / 100,
    Y: context.newFakeData.orders.height / 100,
    Z: context.newFakeData.orders.depth / 100
  }
  const maxDimensions = Math.max(dimensions.X, dimensions.Y, dimensions.Z)
  const angularSize = (fov * Math.PI) / 180;
  const cameraDistance = (maxDimensions * 1.5) + ((maxDimensions / 2) / Math.tan(angularSize / 2));

  return (
    <Canvas
      camera={{
        fov: fov,
        position: [
          dimensions.X + (dimensions.X / 3),
          dimensions.Y,
          cameraDistance
        ]
      }}
      style={{
        width: "1000px",
        height: "700px"
      }}
      shadows
    >
      <spotLight color={0xffffff} scale={1} position={[-3, 3, 4]} castShadow shadow-normalBias={0.1} shadow-mapSize={[1024, 1024]} />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      
      <Scene3d dimensions={dimensions}/>

    </Canvas >
  )
}
// )enableZoom={false} enablePan={false} target={[size[0] / 2, size[1] / 2, size[2] / 2]}

useGLTF.preload("/assets/3dModels/Materials.glb");

export default Viewer3d
