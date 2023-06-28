import Structure from "../3dModels/Closet/Structure";
import Shelf from "../3dModels/Closet/Shelf";
import Door from "../3dModels/Closet/Door";
import { useGLTF } from "@react-three/drei";
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import Closet from "../3dModels/Closet";

function Scene3d({ dimensions }) {
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')

    return (
        <>
            <mesh
                receiveShadow
                position={[dimensions.X / 2, -dimensions.Y / 2 - 0.01, 0]}
                material={materials.chrome}
            >
                <boxGeometry args={[dimensions.X + 2, 0.02, dimensions.Z + 2]} />
            </mesh>

            <Closet dimensions={dimensions} />

            {/* <Door dimensions={dimensions} material={materials.wood} side="right"/>  */}
            {/* <Door dimensions={dimensions} material={materials.wood} />
      <Door dimensions={dimensions} material={materials.wood} side="right" /> */}


            {/* <Closet4Doors width={size[0]} height={size[1]} depth={size[2]} position={[0, 0, 0]} /> */}
        </>
    )
}
export default Scene3d