import { useGLTF } from "@react-three/drei";
import Shelf from "../Shelf";
import Rod from "../Rod";
import Door from "../Door"
import ShelvesConstructor from "../ShelvesConstructor";
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";
import DrawersConstructor from "../DrawersConstructor";


function Structure({ dimensions, material, position = { X: 0, Y: 0, Z: 0 }, numOfShelves = 3, oneDoor, numOfDrawers = 0, withRod, withDoors }) {
    const materialText = useContext(DataContext).fullOrder.color || "אורן"
    const materialType = (materialText === "אורן") ? "wood" : (materialText === "לבן") ? "white" : "chrome"; const { materials } = useGLTF('/assets/3dModels/Materials.glb'),
        stage = useContext(DataContext).stage,
        thickness = 0.02,
        thicknessBack = 0.003
    const DRAWER_HEIGHT = 0.2;
    const DRAWER_GAP = 0.01;
    const ALL_DRAWERS_HEIGHT = (DRAWER_HEIGHT) * numOfDrawers

    console.log("stage", stage);


    return (
        <group
            position={[position.X, position.Y, position.Z]}
        >
            {/* left: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[thickness / 2, 0, -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z - thickness]} />
            </mesh>
            {/* top: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[(dimensions.X / 2), (dimensions.Y / 2) - (thickness / 2), -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - (thickness)]} />
            </mesh>
            {/* right: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[dimensions.X - (thickness / 2), 0, -thickness / 2]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[thickness, dimensions.Y, dimensions.Z - thickness]} />
            </mesh>
            {/* bottom: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[(dimensions.X / 2), (-dimensions.Y / 2) + (thickness / 2), (-thickness / 2)]}
            >
                {/* <meshBasicMaterial color={0xff00ff} /> */}
                <boxGeometry args={[dimensions.X - (thickness * 2), thickness, dimensions.Z - thickness]} />
            </mesh >
            {/* back: */}
            <mesh
                castShadow
                receiveShadow
                material={material}
                position={[(dimensions.X / 2), 0, (-dimensions.Z / 2) - (thicknessBack / 2)]}
            // position={[0.5, 0, -0.3]}
            // position={[2,2,2]}
            >
                {/* <meshBasicMaterial color={0x0000ff} /> */}
                <boxGeometry args={[dimensions.X, dimensions.Y, thicknessBack]} />
            </mesh >

            {(!withRod) &&
                < ShelvesConstructor
                    dimensions={{
                        X: dimensions.X,
                        Y: dimensions.Y - ALL_DRAWERS_HEIGHT,
                        Z: dimensions.Z
                    }}
                    position={{
                        X: dimensions.X / 2,
                        Y: + (ALL_DRAWERS_HEIGHT / 2),
                        Z: position.Z
                    }}
                    numOfShelves={numOfShelves}
                    withRod={withRod}
                />
            }

            <DrawersConstructor dimensions={dimensions} position={{ X: dimensions.X / 2, Y: position.Y, Z: position.Z }} numOfDrawers={numOfDrawers} />


            {
                (stage !== 4 && withDoors) && <Door position={position} dimensions={{ X: dimensions.X, Y: dimensions.Y, Z: dimensions.Z }} material={materials[materialType]} side={"left"} isSingular={oneDoor} />
            }{
                (!oneDoor) && (stage !== 4 && withDoors) &&
                <Door
                    position={{
                        X: 0,
                        Y: -dimensions.Y / 2 + ALL_DRAWERS_HEIGHT + ((dimensions.Y - ALL_DRAWERS_HEIGHT) / 2),
                        Z: 0
                    }}
                    dimensions={{
                        X: dimensions.X,
                        Y: dimensions.Y - ALL_DRAWERS_HEIGHT,
                        Z: dimensions.Z
                    }}
                    material={materials[materialType]}
                    side={"right"} />
            }


        </group>

    )
}
export default Structure