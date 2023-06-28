const validation = {
  // value: null or function
  // function : if error - return "msg"

  1: {
    furniture: null,
  },
  2: {
    height: null,
    width: null,
    depth: null,
    doors: null,
  },
  3: {
    handleId: null,
    color: null,
    base: null,
  },
  4: {
    section1_drawers: null,
    section1_hangingRod: null,
    section1_shelves: null,
    section2_drawers: null,
    section2_hangingRod: null,
    section2_shelves: null,
  },
};

export default function errorChecking(context) {
  const errorsList = [];
  const valNow = validation[context.stage];
  const keys = Object.keys(valNow);

  
  keys.forEach((key) => {
    const value = valNow[key];
    if (!value) {
      let valueFromContext = context.fullOrder[key];
      if (key.includes("_")) {
        const [key1, key2] = key.split("_");
        valueFromContext = context.fullOrder[key1][key2];
      }
      
      if (!valueFromContext) {
        errorsList.push({ key, msg: "--Must be entered!--" });
      }
    } else if (typeof valueFromContext === "function") {
      let msg = value();
      if (msg) errorsList.push({ key, msg });
    } else {
    }
  });
  return errorsList;
}
