import { Closet4Doors } from "../../Components/3dModels/Closet4Doors";
import { useGLTF } from "@react-three/drei";
// bottomPanel
// position={[-0.78, 0.1, -0.025]}

// nodes.topPanel
// position={[-0.78, 2.4, -0.025]}
//גובה position שוןה למטר
//positian 2.4 ==== 2.4 מטר    

import React from 'react'
import { calcPosition, calcScale, initScale } from '../../Functions/';



function Shelf1({ height, LeftShelvesNumber, depth }) {
  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
  const shelfHeightL = (height/100) / (LeftShelvesNumber + 1)

  console.log(shelfHeightL);
  const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)

  console.log(LeftShelvesNumber);
  console.log(array);

  return (
    <>
      {array.map(value =>{
      const y = (shelfHeightL * value)+ 0.08
      console.log(y);
      return(<mesh
        key={value}
        castShadow
        receiveShadow
        geometry={nodes.shelfLeft.geometry}
        material={materials.wood_1}
        position={[0.2, y, depth]}
        
      />

      )

}
      )}

    </>
  )
}

export default Shelf1




// const renderDivs = () => {
//     const divs = [];
//     for (let i = 0; i < LeftShelvesNumber; i++) {
// // let shelf_Space = shelfHeightL
// const div = (
//     <mesh
//       key={i}
//       castShadow
//       receiveShadow
//       geometry={nodes.shelfLeft.geometry}
//       material={materials.wood_1}
//       position={[0.2, shelfHeightL * i, 0.3]}
//     />
//   )
//       divs.push(div);
//     }

//     return divs;
//   };
