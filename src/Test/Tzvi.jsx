import { Canvas } from "@react-three/fiber"
import { Closet4Doors } from "../Components/3dModels/Closet4Doors"
import Viewer3d from "../Components/Viewer3d"
import { useContext } from "react";
import { DataContext } from "../Context/MainContext";
import Structure from "../Components/3dModels/Closet/Structure";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Leg from "../Components/3dModels/Closet/Leg";

function Tzvi() {
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    console.log(materials);
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

    return (
        <>
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
            >
                <spotLight color={0xffffff} scale={1} position={[1, 1, 1]} />
                <ambientLight intensity={0} />

                <Leg material={materials.chrome} />
                <Structure material={materials.wood} dimensions={dimensions} x={0} y={0} z={0} />

                <OrbitControls  />
                {/* <Closet4Doors width={size[0]} height={size[1]} depth={size[2]} position={[0, 0, 0]} /> */}

            </Canvas>

        </>
    )
}
useGLTF.preload("/assets/3dModels/Materials.glb");

export default Tzvi
