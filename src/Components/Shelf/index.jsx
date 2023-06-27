import styles from './style.module.css'
import { Closet4Doors } from "../3dModels/Closet4Doors";
import { useGLTF } from "@react-three/drei";
import { calcPosition, calcScale } from '../../Functions/3dCalc/calcScale'

// bottomPanel
// position={[-0.78, 0.1, -0.025]}

// nodes.topPanel
// position={[-0.78, 2.4, -0.025]}
//גובה position שוןה למטר
//positian 2.4 ==== 2.4 מטר    

function Shelf({ height, shelvesNumber, scale, position }) {

  const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
  const shelfHeight = (height-0.1) / (shelvesNumber + 1)
  //0.2

  const calculatedPosition = calcPosition(position.toArray(),[scale.X,scale.Y,scale.Z])
  console.log(calculatedPosition)
let x = calculatedPosition[0]
let y = 0.05
let z =  calculatedPosition[2]
  // console.log(shelfHeightL);
  const array = Array.from({ length: shelvesNumber }, (_, i) => i + 1)
console.log(array);

  // console.log(position);
  // console.log(scale);

  return (
    <>
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
        
        // position={[position.x-0.16, y, position.z+0.15]}
        // position={[0.4, y, 0.297]}
        //         position={calcPosition([1.208, y, 0.297], [scale.X, scale.Y, scale.Z])}
        // position={x[x] ,y ,x[z]}
        // scale={[0.63, 1,1.6]}
        />
        {/* {console.log(calcPosition([1.208,  y, 0.297], [scale.X, scale.Y, scale.Z]))} */}
        </>
        )
}

      )}

    </>
  )
}

export default Shelf











// import styles from './style.module.css'
// import { Closet4Doors } from "../3dModels/Closet4Doors";
// import { useGLTF } from "@react-three/drei";
// import { calcPosition, calcScale } from '../../Functions/3dCalc/calcScale'

// // bottomPanel
// // position={[-0.78, 0.1, -0.025]}

// // nodes.topPanel
// // position={[-0.78, 2.4, -0.025]}
// //גובה position שוןה למטר
// //positian 2.4 ==== 2.4 מטר    

// function Shelf({ height, LeftShelvesNumber, depth, position ,scale }) {

//   const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");

//   const shelfHeightL = ((height-0.2)*100) / (LeftShelvesNumber + 1)

//   // console.log(shelfHeightL);
//   const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)


//   // console.log(position);
//   // console.log(scale);

//   return (
//     <>
//       {array.map(value =>{
//         let x = 0.08
//       const y = (shelfHeightL * value) / (100 - 10)
//       // console.log(y);
//       return(<>
//       <mesh
//         key={value}
//         castShadow
//         receiveShadow
//         geometry={nodes.shelfLeft.geometry}
//         material={materials.wood_1}
//         position={calcPosition([1.208, y, 0.297], [scale.X, scale.Y, scale.Z])}
//         scale={calcScale(1, [scale.X, 1, scale.Z])}
        
//         // position={[position.x-0.16, y, position.z+0.15]}
//         // position={[0.4, y, 0.297]}
//         // scale={[0.63, 1,1.6]}
//         />
//         {console.log(scale)}
//         {console.log(scale)}
//         </>
//         )
// }

//       )}

//     </>
//   )
// }

// export default Shelf

















// import styles from './style.module.css'
// import { Closet4Doors } from "../3dModels/Closet4Doors";
// import { useGLTF } from "@react-three/drei";

// // bottomPanel
// // position={[-0.78, 0.1, -0.025]}

// // nodes.topPanel
// // position={[-0.78, 2.4, -0.025]}
// //גובה position שוןה למטר
// //positian 2.4 ==== 2.4 מטר    



// function Shelf({ height, LeftShelvesNumber, depth, position,  scale }) {
//   const { nodes, materials } = useGLTF("assets/3dModels/Closet4Doors.glb");
//   const array = Array.from({ length: LeftShelvesNumber }, (_, i) => i + 1)

  
//   return array.map((value) => {
//   // const shelfHeightL = ((((height-0.2)*100) / (LeftShelvesNumber + 1)) * value) / (100 - 10)
//   const shelfHeightL = ((height-0.2)*100) / (LeftShelvesNumber + 1)
  
  
  
  
//   // Algorithm to adjust position and scale of nodes.shelfLeft based on new dimensions
  
//   // 1. Calculate the initial scale ratio of nodes.shelfLeft
//   const initialScaleRatio = nodes.shelfLeft.scale.y / nodes.shelfLeft.scale.x;
  
// // 2. Inside the Closet4Doors component, update the position and scale of nodes.shelfLeft


// {/* <group scale={calcScale([defaultDimensions[0], 1, defaultDimensions[2]], [width, 1, depth])}> */}
// // ...


//     // Calculate the new height and scale values based on the ratio
//     const newHeight = height - 0.2;
//     const newScaleY = newHeight * initialScaleRatio;
    
//     // Calculate the new position values
//     const newX = position.x;
//     const newY = (shelfHeightL * value) / (100 - 10) + 0.08;
    
//     const newScale = [1, newScaleY, 1];
//     const newPosition = [newX, newY, position.z];

//     console.log(nodes.shelfLeft.geometry);
//     console.log(newScale);
//     // Return the mesh with updated position and scale
//     return (<mesh
      
//       key={value}
//       castShadow
//       receiveShadow
//       geometry={nodes.shelfLeft.geometry}
//       material={materials.wood_1}
//       position={position}
//         // position={[position.x,position.y, position.z]}
//         scale={ scale}
//       />
//     );

//   })}

  


// export default Shelf


