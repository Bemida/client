import { useGLTF } from "@react-three/drei";
import Shelf from "../Shelf";
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";

function ShelvesConstructor({ position, dimensions, numOfShelves }) {
    const materialType = useContext(DataContext).newFakeData.orders.material,
        { materials } = useGLTF('/assets/3dModels/Materials.glb'),
        shelvesArr = Array.from({ length: numOfShelves }, (_, i) => i),
        THICKNESS = 0.02;

    const
        gap = dimensions.Y / (numOfShelves + 1),
        start = position.Y - (dimensions.Y / 2) + gap,
        asdf = 4


    /* creating the shelves: */
    return (
        shelvesArr.map((i, n) => {
            return (
                <Shelf
                    key={n}
                    dimensions={dimensions}
                    material={materials[materialType]}
                    position={{
                        X: position.X,
                        Y: start + (i * gap),
                        Z: - THICKNESS / 2
                    }} />
            )
        })

    )
}
export default ShelvesConstructor