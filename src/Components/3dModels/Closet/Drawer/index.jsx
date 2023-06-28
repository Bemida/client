import Shelf from "../Shelf";

//Creator : didi
function Drawer({ dimensions, material, HightDrawer = 0.2 }) {
    const thickness = 0.02;

    return (
        <>

            <mesh
                position={[dimensions.X / 2, (-dimensions.Y + HightDrawer) / 2 + .1, dimensions.Z / 2 - thickness]}
                material={material}
            >

                {/* <meshBasicMaterial color={0xf0004f} /> */}
                {/* <meshBasicMaterial color={0xf0701f} /> */}
                <boxGeometry args={[dimensions.X - 0.004, HightDrawer - 0.002, thickness]} />
            </mesh >
            <Shelf
                dimensions={dimensions}
                position={{
                    X: dimensions.X / 2,
                    Y: (-dimensions.Y + thickness) / 2 + 0.1 + HightDrawer,
                    Z: 0
                }}
                material={material}
            />
        </>)
}
export default Drawer