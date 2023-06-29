import Shelf from "../Shelf";

//Creator : didi
function Drawer({ position, dimensions, material, }) {
    const DRAWER_HEIGHT = 0.2
    const thickness = 0.02;

    return (
        <>
            <group
                position={[position.X, position.Y, position.Z]}
            >
                <mesh
                    position={[0, 0, 0]}
                    material={material}
                >
                    <boxGeometry args={[dimensions.X - 0.004, DRAWER_HEIGHT, thickness]} />
                </mesh >
                <Shelf
                    dimensions={dimensions}
                    position={{
                        X: 0,
                        Y: DRAWER_HEIGHT / 2 - thickness / 2,
                        Z: -dimensions.Z / 2
                    }}
                    material={material}
                />
            </group>
        </>)
}
export default Drawer