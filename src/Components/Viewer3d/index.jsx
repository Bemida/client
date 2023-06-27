import { Canvas } from "@react-three/fiber"
import { Closet4Doors } from "../3dModels/Closet4Doors"
import { FaceControls, FlyControls, MapControls, OrbitControls, PivotControls } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import { BasicShadowMap } from "three";

function Viewer3d() {
  const context = useContext(DataContext)
  const fov = 40;
  let size = [
    context.fakeData.orders.exteriorStyle.size.width / 100,
    context.fakeData.orders.exteriorStyle.size.height / 100,
    context.fakeData.orders.exteriorStyle.size.depth / 100
  ]
  size = [
    1, 2, 1
  ]
  const maxDimensions = Math.max(size[0], size[1], size[2])
  const angularSize = (fov * Math.PI) / 180;
  const cameraDistance = (maxDimensions * 1.5) + ((maxDimensions / 2) / Math.tan(angularSize / 2));
  console.log(cameraDistance);

  return (
    <Canvas
      camera={{
        fov: fov,
        position: [
          size[0] + (size[0] / 3),
          size[1],
          cameraDistance
        ]
      }}
      style={{
        width: "1000px",
        height: "700px"
      }}
      shadows={BasicShadowMap}
    >
      <spotLight color={0xffffff} scale={1} position={[-8, 4, 5]} />
      <ambientLight intensity={0.1} />
      <OrbitControls enableZoom={false} enablePan={false} target={[size[0] / 2, size[1] / 2, size[2] / 2]} />
      <Closet4Doors width={size[0]} height={size[1]} depth={size[2]} position={[0, 0, 0]} />

    </Canvas>
  )
}
export default Viewer3d
