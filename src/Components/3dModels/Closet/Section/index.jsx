import { useGLTF } from "@react-three/drei";
import Structure from "../Structure"
import Shelf from "../Shelf";
import Leg from "../Leg";

function Section({ dimensions, position, numOfShelves = 4, withLegs = true, oneDoor= false }) {
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    const shelvesArr = Array.from({ length: numOfShelves }, (_, i) => i);
    const legGap = 0.07;
    return (
        <>
            <group position={[position.X, position.Y, position.Z]}>

                {/* creating the frame: */}

                <Structure
                    dimensions={{
                        X: dimensions.X,
                        Y: dimensions.Y - 0.1,
                        Z: dimensions.Z,
                    }}
                    position={{
                        X: 0,
                        Y: position.Y + 0.05,
                        Z: 0
                    }}
                    material={materials.wood}
                />


                {/* creating the shelves: */}

                {shelvesArr.map((i, n) => {
                    return (
                        <Shelf
                            key={n}
                            dimensions={dimensions}
                            material={materials.wood}
                            position={{
                                X: dimensions.X / 2,
                                Y: (
                                    -(dimensions.Y / 2) + //starting point
                                    (dimensions.Y / (numOfShelves + 1)) + //skip the bottom
                                    ((dimensions.Y - (dimensions.Y / (numOfShelves + 1))) //skip the top
                                        / numOfShelves) * i //add height for each shelf in the array

                                ),
                                Z: 0
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