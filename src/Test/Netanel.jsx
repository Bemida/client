import React from 'react'
import Viewer3d from '../Components/Viewer3d'
import  shelf from '../Functions/3dCalc/Shelf'

export default function Netanel() {
  return (
    <div>
     <Viewer3d/>
     
    </div>
  )
}



// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */
// import React, { useRef, useState } from "react";
// import { useGLTF } from "@react-three/drei";
// import Shelf from "../../Functions/3dCalc/Shelf";
// // import { calcScale } from '../../Functions/3dCalc/calcScale';



// export function Closet4Doors({ width, height, depth, isSokol, material, handleType, RightShelvesNumber, LeftShelvesNumber, isLeftPole, isRightPole, ...props }) {
//   const defaultDimensions = [161, 230, 59]
//   const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
//   console.log(nodes);
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.poleLeft.geometry}
//         material={materials.chrome}
//         position={[0.016, 2.294, 0.299]}
//         rotation={[0, 0, -Math.PI / 2]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.leftPanel.geometry}
//         material={materials.wood_1}
//         position={[0.2, 1.25, 0.3]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.backPanel.geometry}
//         material={materials.wood_1}
//         position={[0.2, 1.25, 0.002]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.bottomPanel.geometry}
//         material={materials.wood_1}
//         position={[0, 0.1, 0.3]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.rightPanel.geometry}
//         material={materials.wood_1}
//         position={[1.616, 1.25, 0.005]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.topPanel.geometry}
//         material={materials.wood_1}
//         position={[0, 2.4, 0.3]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.divider.geometry}
//         material={materials.wood_1}
//         position={[1, 1.25, 0.3]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.hinge1.geometry}
//         material={materials.chrome}
//         position={[0.016, 2.222, 0.558]}
//         rotation={[Math.PI, 0, -Math.PI / 2]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.hinge2.geometry}
//         material={materials.chrome}
//         position={[0.016, 1.665, 0.558]}
//         rotation={[Math.PI, 0, -Math.PI / 2]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.hinge3.geometry}
//         material={materials.chrome}
//         position={[0.016, 1.07, 0.558]}
//         rotation={[Math.PI, 0, -Math.PI / 2]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.hinge4.geometry}
//         material={materials.chrome}
//         position={[0.016, 0.297, 0.558]}
//         rotation={[Math.PI, 0, -Math.PI / 2]}
//       />
//       {/* <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.door1.geometry}
//         material={materials.wood_1}
//         position={[0.015, 1.25, 0.595]}
//         rotation={[-Math.PI, Math.PI / 2, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.door2.geometry}
//         material={materials.wood_1}
//         position={[0.8, 1.25, 0.595]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.door3.geometry}
//         material={materials.wood_1}
//         position={[0.817, 1.25, 0.595]}
//         rotation={[-Math.PI, 0, 0]}
//         scale={-1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.door4.geometry}
//         material={materials.wood_1}
//         position={[1.613, 1.25, 0.595]}
//       /> */}
//       {/* <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.handle1.geometry}
//         material={materials.chrome}
//         position={[-0.001, 0.9, 0.946]}
//         rotation={[0, -1.571, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.handle2.geometry}
//         material={materials.chrome}
//         position={[0.44, 0.9, 0.611]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.handle3.geometry}
//         material={materials.chrome}
//         position={[1.177, 0.9, 0.611]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.handle4.geometry}
//         material={materials.chrome}
//         position={[1.253, 0.9, 0.611]}
//       /> */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.legBackLeft.geometry}
//         material={materials["chrome.001"]}
//         position={[0.101, 0.05, 0.052]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.legBackRight.geometry}
//         material={materials["chrome.001"]}
//         position={[1.538, 0.05, 0.052]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.legFrontLeft.geometry}
//         material={materials["chrome.001"]}
//         position={[0.101, 0.05, 0.512]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.legFrontRight.geometry}
//         material={materials["chrome.001"]}
//         position={[1.538, 0.05, 0.512]}
//       />
//       {/* <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.shelfLeft.geometry}
//         material={materials.wood_1}
//         position={[0.2, 1.222, 0.3]}
//       /> */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.shelfRight.geometry}
//         material={materials.wood_1}
//         position={[1, 1.222, 0.3]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.sokolBack.geometry}
//         material={materials.wood_1}
//         position={[0.2, 0.05, 0.287]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.sokolFront.geometry}
//         material={materials.wood_1}
//         position={[0.2, 0.05, 0.287]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.sokolLeft.geometry}
//         material={materials.wood_1}
//         position={[0.2, 0.05, 0.287]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.sokolRight.geometry}
//         material={materials.wood_1}
//         position={[0.2, 0.05, 0.287]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.poleRight.geometry}
//         material={materials.chrome}
//         position={[0.817, 2.294, 0.299]}
//         rotation={[0, 0, -Math.PI / 2]}
//       />
//       {/* <Shelf height={height} LeftShelvesNumber={LeftShelvesNumber} nodes={nodes} materials={materials}/> */}
//       <Shelf height={240} LeftShelvesNumber={10}  depth ={0.3}/>
//     </group>
//   );
// }

// useGLTF.preload("assets/3dModels/Closet4Doors.glb");

