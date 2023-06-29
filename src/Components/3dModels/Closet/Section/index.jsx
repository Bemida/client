import { useGLTF } from "@react-three/drei";
import Structure from "../Structure"
import Shelf from "../Shelf";
import Leg from "../Leg";
import Drawer from "../Drawer";
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";
import Rod from "../Rod";



function Section({ dimensions, position, numOfShelves = 4, withLegs = true, oneDoor = false, numOfDrawers = 2, withRod = false }) {
    const materialType = useContext(DataContext).newFakeData.orders.material
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    const legGap = 0.07,
        thickness = 0.02

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
                    numOfShelves={numOfShelves}
                    numOfDrawers={numOfDrawers}
                    withRod={withRod}
                />


                {/* creating the rod: */}

                {withRod && <Rod position={position} dimensions={dimensions} thickness={thickness} material={materials.chrome} />}





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