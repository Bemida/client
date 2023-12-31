import { useGLTF } from "@react-three/drei";
import { calcPosition, calcScale } from '../../Functions/3dCalc/calcScale'

export default function Shelf({ height, shelvesNumber, scale, position }) {
  const materialText = useContext(DataContext).fullOrder.color || "אורן"
  const materialType = (materialText === "אורן") ? "wood" : (materialText === "לבן") ? "white" : "chrome";  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb"),
    shelfHeight = (height - 0.1) / (shelvesNumber + 1),
    calculatedPosition = calcPosition(position.toArray(), [scale.X, scale.Y, scale.Z]),
    array = Array.from({ length: shelvesNumber }, (_, i) => i + 1);

  let x = calculatedPosition[0],
    y = 0.05,
    z = calculatedPosition[2];


  return (
    <>
<<<<<<< HEAD
      {array.map(floor =>{
        
        y += shelfHeight
        return(<>
      <mesh
        key={floor}
        castShadow
        receiveShadow
        geometry={nodes.shelfLeft.geometry}
        material={materials.wood_1}
        position={[x,y,z]}
        scale={calcScale(1, [scale.X, 1, scale.Z])}
        />
    
        </>
=======
      {
        array.map(floor => {
          y += shelfHeight;
          return (
            <mesh
              key={floor}
              castShadow
              receiveShadow
              geometry={nodes.shelfLeft.geometry}
              material={materials[materialType]}
              position={[x, y, z]}
              scale={calcScale(1, [scale.X, 1, scale.Z])} />
          )
        }
>>>>>>> 659e1a13ba0626a1ec333e7148e474e1bde3e6e2
        )
      }
    </>
  )
}