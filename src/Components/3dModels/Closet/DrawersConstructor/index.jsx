import { useGLTF } from "@react-three/drei";
import Drawer from "../Drawer"
import { useContext } from "react";
import { DataContext } from "../../../../Context/MainContext";

function DrawersConstructor({ dimensions, position, numOfDrawers }) {
    const materialType = useContext(DataContext).newFakeData.orders.material
    const { materials } = useGLTF('/assets/3dModels/Materials.glb')
    const drawersArr = Array.from({ length: numOfDrawers }, (_, i) => i);
    const DRAWER_HEIGHT = 0.2;
    const THICKNESS = 0.02;
    const DRAWER_GAP = 0.01;

    /* creating the Drawer: */
    return (
        drawersArr.map((i, n) => {
            return (
                <Drawer
                    key={n}
                    dimensions={dimensions}
                    material={materials[materialType]}
                    position={{
                        X: position.X,
                        Y: (-dimensions.Y / 2) + (DRAWER_HEIGHT / 2) + // starting point
                            (i * (DRAWER_HEIGHT + DRAWER_GAP)), // drawer layout
                        Z: dimensions.Z / 2 - (THICKNESS / 2)
                    }} />
            )
        })
    )
}
export default DrawersConstructor