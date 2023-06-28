import { useGLTF } from "@react-three/drei";
import Structure from "../Structure"
import Shelf from "../Shelf";
import Leg from "../Leg";

function Section({ dimensions, position, numOfShelves = 4, withLegs = true }) {
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    const shelvesArr = Array.from({ length: numOfShelves }, (_, i) => i);
    const legGap = 0.07;
    return (
        <>


            {/* creating the frame: */}

            <Structure
                dimensions={{
                    X: dimensions.X,
                    Y: dimensions.Y - 0.1,
                    Z: dimensions.Z,
                }}
                position={{
                    X: position.X,
                    Y: position.Y + 0.05,
                    Z: position.Z
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
                <group>
                    {/* left-back leg: */}
                    <Leg
                        position={{
                            X: position.X + legGap,
                            Y: position.Y - dimensions.Y / 2,
                            Z: position.Z - dimensions.Z / 2 + legGap
                        }}
                        material={materials.chrome}
                    />

                    {/* right-back leg: */}
                    <Leg
                        position={{
                            X: position.X + dimensions.X - legGap,
                            Y: position.Y - dimensions.Y / 2,
                            Z: position.Z - dimensions.Z / 2 + legGap
                        }}
                        material={materials.chrome}
                    />

                    {/* right-front leg: */}
                    <Leg
                        position={{
                            X: position.X + dimensions.X - legGap,
                            Y: position.Y - dimensions.Y / 2,
                            Z: position.Z + dimensions.Z / 2 - legGap
                        }}
                        material={materials.chrome}
                    />

                    {/* left-front leg: */}
                    <Leg
                        position={{
                            X: position.X + legGap,
                            Y: position.Y - dimensions.Y / 2,
                            Z: position.Z + dimensions.Z / 2 - legGap
                        }}
                        material={materials.chrome}
                    />
                </group>
            }
        </>
    )
}
export default Section