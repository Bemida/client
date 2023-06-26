// import styles from './style.module.css'
// import { Closet4Doors } from "../3dModels/Closet4Doors";
// import { useGLTF } from "@react-three/drei";

// // bottomPanel
// // position={[-0.78, 0.1, -0.025]}

// // nodes.topPanel
// // position={[-0.78, 2.4, -0.025]}
// //גובה position שוןה למטר
// //positian 2.4 ==== 2.4 מטר    

// function Shelf({ height, LeftShelvesNumber, depth, position }) {
//   const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
//   const shelfHeightL = ((height-0.2)*100) / (LeftShelvesNumber + 1)

//   console.log(shelfHeightL);
//   const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)

//   console.log(LeftShelvesNumber);
//   console.log(position);

//   return (
//     <>
//       {array.map(value =>{
//         let x = 0.08
//       const y = (shelfHeightL * value) / (100 - 10)
//       console.log(y);
//       return(<mesh
//         key={value}
//         castShadow
//         receiveShadow
//         geometry={nodes.shelfLeft.geometry}
//         material={materials.wood_1}
//         position={[position.x, y+x, position.z]}
        
//         // position={[position.x-0.16, y, position.z+0.15]}
//         // position={[0.4, y, 0.297]}
//         // scale={[0.63, 1,1.6]}
//         scale={[1, 1,1]}
        
//         />
        
//         )
//         console.log(y);
//         x=0

// }
//       )}

//     </>
//   )
// }

// export default Shelf






import styles from './style.module.css'
import { Closet4Doors } from "../3dModels/Closet4Doors";
import { useGLTF } from "@react-three/drei";

// bottomPanel
// position={[-0.78, 0.1, -0.025]}

// nodes.topPanel
// position={[-0.78, 2.4, -0.025]}
//גובה position שוןה למטר
//positian 2.4 ==== 2.4 מטר    



function Shelf({ height, LeftShelvesNumber, depth, position }) {
  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
  const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)

  
  return array.map((value) => {
  // const shelfHeightL = ((((height-0.2)*100) / (LeftShelvesNumber + 1)) * value) / (100 - 10)
  const shelfHeightL = ((height-0.2)*100) / (LeftShelvesNumber + 1)
  
  
  
  
  // Algorithm to adjust position and scale of nodes.shelfLeft based on new dimensions
  
  // 1. Calculate the initial scale ratio of nodes.shelfLeft
  const initialScaleRatio = nodes.shelfLeft.scale.y / nodes.shelfLeft.scale.x;
  
// 2. Inside the Closet4Doors component, update the position and scale of nodes.shelfLeft


{/* <group scale={calcScale([defaultDimensions[0], 1, defaultDimensions[2]], [width, 1, depth])}> */}
// ...


    // Calculate the new height and scale values based on the ratio
    const newHeight = height - 0.2;
    const newScaleY = newHeight * initialScaleRatio;
    
    // Calculate the new position values
    const newX = position.x;
    const newY = (shelfHeightL * value) / (100 - 10) + 0.08;
    
    const newScale = [1, newScaleY, 1];
    const newPosition = [newX, newY, position.z];

    console.log(nodes.shelfLeft.geometry);
    console.log(newScale);
    // Return the mesh with updated position and scale
    return (<mesh
      
      key={value}
      castShadow
      receiveShadow
      geometry={nodes.shelfLeft.geometry}
      material={materials.wood_1}
      position={newPosition}
        // position={[position.x,position.y, position.z]}
        scale={newScale}
      />
    );

  })}

  


export default Shelf
