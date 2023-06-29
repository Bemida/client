// import {DataContext} from '../Context/MainContext'
// import {useContext } from 'react';
// const context = useContext(DataContext)
const message = "נא לבחור"
const validation = {
  // value: null or function
  // function : if error - return "msg"

  1: {
    furniture: {
      type: null,
      message: `${message} רהיט`
    }
  },
  2: {
    height: {
      type: null,
      message: `${message} גובה`
    },
    width: {
      type: null,
      message: `${message} רוחב`
    },
    depth: {
      type: null,
      message: `${message} + עומק`
    },
    doors: {
      type: null,
      message: `${message} + דלתות`
    },
  },
  3: {
    handleId: {
      type: null,
      message: `${message} + ידית`
    },
    color: {
      type: null,
      message: `${message} + צבע`
    },
    base: {
      type: null,
      message: `${message} + בסיס`
    },
  },
  4: {
    // section1_drawers: null, // change to sections, go in to the split and put the key into the mniddle with __
    // section1_hangingRod: null,
    // section1_shelves: null,
    // section2_drawers: null,
    // section2_hangingRod: null,
    // section2_shelves: null,
  },
  5: {}
};

export default function errorChecking(context) {
  const errorsList = [];
  const valNow = validation[context.stage];
  const keys = typeof valNow === 'object' ? Object.keys(valNow) : [];

  console.log(errorsList);

  keys.forEach((key) => {
    const value = valNow.type
    if (!value) {
      let valueFromContext = context.fullOrder[key];
      // if (key.includes("_")) {
      //   const [key1, key2] = key.split("_");
      //   valueFromContext = context.fullOrder[key1][key2];
      // }
      if (!valueFromContext) {
        errorsList.push({ key, msg: valNow[key]?.message });
        console.log(errorsList)
      }
    } else if (typeof valueFromContext === "function") {
      let msg = value();
      if (msg) errorsList.push({ key, msg });
    } else {
    }
  });
  return errorsList;
}
