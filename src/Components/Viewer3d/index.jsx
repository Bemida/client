import { Canvas } from "@react-three/fiber"
import { Closet4Doors } from "../3dModels/Closet4Doors"
import { FaceControls, FlyControls, MapControls, OrbitControls, PivotControls } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import { BasicShadowMap } from "three";
import Structure from "../3dModels/Closet/Structure";
import Shelf from "../3dModels/Closet/Shelf";
import Door from "../3dModels/Closet/Door";

function Viewer3d() {
  const context = useContext(DataContext)
  const fov = 40;
  let size = [
    context.fakeData.orders.exteriorStyle.size.width / 100,
    context.fakeData.orders.exteriorStyle.size.height / 100,
    context.fakeData.orders.exteriorStyle.size.depth / 100
  ]
  // size = [
  //   1, 1, 1
  // ]
  const maxDimensions = Math.max(size[0], size[1], size[2])
  const angularSize = (fov * Math.PI) / 180;
  const cameraDistance = (maxDimensions * 1.5) + ((maxDimensions / 2) / Math.tan(angularSize / 2));
  console.log(cameraDistance);
  const dimensions = {
    X: 1,
    Y: 2,
    Z: 0.6
  }
  // const side = "right";
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
      <ambientLight intensity={0.3} />


       <Structure dimensions={dimensions} x={0} y={0} z={0} />
     {/* <Structure dimensions={dimensions} x={dimensions.X + 0.02} y={0} z={0} /> */}
      <Shelf dimensions={dimensions} />
      <Door dimensions={dimensions} />


      <OrbitControls />
      {/* <Closet4Doors width={size[0]} height={size[1]} depth={size[2]} position={[0, 0, 0]} /> */}

    </Canvas>
  )
}
// )enableZoom={false} enablePan={false} target={[size[0] / 2, size[1] / 2, size[2] / 2]}
export default Viewer3d
