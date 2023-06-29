import { useGLTF } from "@react-three/drei";
import Structure from "../Structure"
import Shelf from "../Shelf";
import Leg from "../Leg";
import Drawer from "../Drawer";
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";



function Section({ dimensions, position, numOfShelves = 4, withLegs = true, oneDoor = false, numOfDrawer = 2 }) {
    const materialType = useContext(DataContext).newFakeData.orders.material
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    const legGap = 0.07;
    const drawerArr = Array.from({ length: numOfDrawer }, (_, i) => i);



    return (
        <>
            <group position={[position.X, position.Y, position.Z]}>

                {/* creating the frame: */}

                {/* creating the frame: */}

                <Structure
                    dimensions={{
                        X: dimensions.X,
                        Y: dimensions.Y - 0.1,
                        Z: dimensions.Z,
                    }}
                    position={{
                        X: 0,
                        Y: 0.05,
                        Z: 0
                    }}
                    material={materials[materialType]}
                    oneDoor={oneDoor}
                />

                {/* creating the Drawer: */}

                {drawerArr.map((i, n) => {
                    return (
                        <Drawer
                            key={n}
                            dimensions={dimensions}
                            material={materials[materialType]}
                            position={{
                                X: position.X,
                                Y: (
                                    -(dimensions.Y / 2) + //starting point
                                    (dimensions.Y / (numOfShelves + 1)) + //skip the bottom
                                    ((dimensions.Y - (dimensions.Y / (numOfShelves + 1))) //skip the top
                                        / numOfShelves) * i //add height for each shelf in the array

                                ),
                                Z: position.Z
                            }} />
                    )
                })}




                {/* creating the legs: */}

                {withLegs &&
                    <group position={[0, 0, 0]}>
                        {/* left-back leg: */}
                        <Leg
                            position={{
                                X: legGap,
                                Y: -dimensions.Y / 2,
                                Z: -dimensions.Z / 2 + legGap
                            }}
                            material={materials.chrome}
                        />

                        {/* right-back leg: */}
                        <Leg
                            position={{
                                X: dimensions.X - legGap,
                                Y: -dimensions.Y / 2,
                                Z: -dimensions.Z / 2 + legGap
                            }}
                            material={materials.chrome}
                        />

                        {/* right-front leg: */}
                        <Leg
                            position={{
                                X: dimensions.X - legGap,
                                Y: -dimensions.Y / 2,
                                Z: dimensions.Z / 2 - legGap
                            }}
                            material={materials.chrome}
                        />

                        {/* left-front leg: */}
                        <Leg
                            position={{
                                X: legGap,
                                Y: -dimensions.Y / 2,
                                Z: dimensions.Z / 2 - legGap
                            }}
                            material={materials.chrome}
                        />
                    </group>
                }
            </group>
        </>
    )
}
export default Section