import { useContext } from "react";
import { DataContext } from "../Context/MainContext";

export default function submitOfNext(context) {
  const stageNow = context?.emptyOrderData?.stageNo;
  console.log(context);

  switch (stageNow) {
    // depth : (v)=>{retrun v%2==0 ? msg : "" }
    case 1:
      return {
        furniture: null,
      };
    case 2:
      return {
        height: null,
        width: null,
        depth: null,
        doors: null,
      };
    case 3:
      return {
        // exterior
      };
  }
}

// const emptyFakeOrderData = {

//   userName: null,
//   userPhone: null,
//   userEmail: null,

//   status: null,
//   shipping: null,
//   furniture: null,
//   color: null,
//   section1: {
//       shelves: 0,
//       hangingRod: true,
//       drawers: 0,
//   },
//   section2: {
//       shelves: 0,
//       hangingRod: true,
//       drawers: 0,
//   },
//   material: null,
//   height: 0,
//   width: 0,
//   depth: 0,
//   doors: 0,
//   color: null,
//   handleId: null,
//   stageNo: 1,
//   base: null,
//   total: 0,
// };
