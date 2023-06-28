import { Canvas } from "@react-three/fiber"
import { Effects, OrbitControls, useGLTF } from "@react-three/drei"
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import Structure from "../3dModels/Closet/Structure";
import Shelf from "../3dModels/Closet/Shelf";
import Door from "../3dModels/Closet/Door";




function Viewer3d() {
  const { materials } = useGLTF('/assets/3dModels/Materials.glb')
  const context = useContext(DataContext)

  //camera work:
  const fov = 40;
  let dimensions = {
    X: context.fakeData.orders.exteriorStyle.size.width / 100,
    Y: context.fakeData.orders.exteriorStyle.size.height / 100,
    Z: context.fakeData.orders.exteriorStyle.size.depth / 100
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
      <mesh
        receiveShadow
        position={[dimensions.X / 2, -dimensions.Y/2 - 0.02, 0]}
        material={materials.chrome}
      >
        <boxGeometry args={[dimensions.X * 4, 0.01, dimensions.Z * 4]} />
      </mesh>

      <Structure dimensions={dimensions} material={materials.wood} />
      <Shelf dimensions={dimensions} material={materials.chrome} />
      {/* <Door dimensions={dimensions} material={materials.wood} side="right"/>  */}
      {/* <Door dimensions={dimensions} material={materials.wood} />
      <Door dimensions={dimensions} material={materials.wood} side="right" /> */}


      {/* <Closet4Doors width={size[0]} height={size[1]} depth={size[2]} position={[0, 0, 0]} /> */}

    </Canvas >
  )
}
// )enableZoom={false} enablePan={false} target={[size[0] / 2, size[1] / 2, size[2] / 2]}

useGLTF.preload("/assets/3dModels/Materials.glb");

export default Viewer3d
