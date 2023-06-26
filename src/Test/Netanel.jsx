import React from 'react'
import Viewer3d from '../Components/Viewer3d'

export default function Netanel() {
  return (
    <div>
      <Viewer3d/>
    </div>
  )
}






// import { Closet4Doors } from "../../Components/3dModels/Closet4Doors";
// import { useGLTF } from "@react-three/drei";
// // bottomPanel
// // position={[-0.78, 0.1, -0.025]}

// // nodes.topPanel
// // position={[-0.78, 2.4, -0.025]}
// //גובה position שוןה למטר
// //positian 2.4 ==== 2.4 מטר    

// import React from 'react'


// function Shelf({ height, LeftShelvesNumber, depth }) {
//   const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
//   const shelfHeightL = (height/100) / (LeftShelvesNumber + 1)

//   console.log(shelfHeightL);
//   const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)

//   console.log(LeftShelvesNumber);
//   console.log(array);

//   return (
//     <>
//       {array.map(value =>{
//       const y = (shelfHeightL * value)+ 0.08
//       console.log(y);
//       return(<mesh
//         key={value}
//         castShadow
//         receiveShadow
//         geometry={nodes.shelfLeft.geometry}
//         material={materials.wood_1}
//         position={[0.2, y, depth]}
        
//       />

//       )

// }
//       )}

//     </>
//   )
// }

// export default Shelf