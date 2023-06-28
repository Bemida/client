import Shelf from "../Shelf";

//Creator : didi
function Drawer({ dimensions, material, HightDrawer = 0.2 }) {
    const thickness = 0.02;

    return (
        <>
            <mesh
                position={[dimensions.X / 2 - thickness / 2, (-dimensions.Y + HightDrawer + thickness) / 2-0.02, dimensions.Z / 2 - 0.02]}
                material={material.wood}
            >

                {/* <meshBasicMaterial color={0xf0004f} /> */}
                <meshBasicMaterial color={0xf0701f} />
                <boxGeometry args={[dimensions.X - 2 * thickness, HightDrawer, thickness]} />
            </mesh >
            <Shelf dimensions={dimensions} position={{X:0,Y:0,Z:0}}/>
        </>)
}
export default Drawer