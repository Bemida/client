import { useGLTF } from "@react-three/drei";
import Shelf from "../Shelf";
import Rod from "../Rod";
import Door from "../Door"
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";


function Structure({ dimensions, material, position = { X: 0, Y: 0, Z: 0 }, numOfShelves = 3, oneDoor }) {
    const materialType = useContext(DataContext).newFakeData.orders.material
    const { materials } = useGLTF('/assets/3dModels/Materials.glb'),
        stage = useContext(DataContext).fullOrder.stageNo,
        thickness = 0.02,
        thicknessBack = 0.003,
        shelvesArr = Array.from({ length: numOfShelves }, (_, i) => i);

    console.log(stage);

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


            {/* creating the shelves: */}

            {shelvesArr.map((i, n) => {
                return (
                    <Shelf
                        key={n}
                        dimensions={dimensions}
                        material={materials[materialType]}
                        position={{
                            X: dimensions.X / 2,
                            Y: (
                                -((dimensions.Y) / 2) + //starting point
                                ((dimensions.Y) / (numOfShelves + 1)) + //skip the bottom
                                ((dimensions.Y - (dimensions.Y / (numOfShelves + 1))) //skip the top
                                    / numOfShelves) * i //add height for each shelf in the array

                            ),
                            Z: 0
                        }} />
                )
            })}
            <Rod position={position} dimensions={dimensions} thickness={thickness} material={materials.chrome} />

            {
                (stage !== 4) && <Door position={position} dimensions={{ X: dimensions.X, Y: dimensions.Y, Z: dimensions.Z }} material={materials[materialType]} side={"left"} isSingular={oneDoor} />
            }{
                (!oneDoor) && (stage !== 4) &&
                <Door position={position} dimensions={dimensions} material={materials[materialType]} side={"right"} />
            }


        </group>

    )
}
export default Structure