let validation = {
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

export default function submitOfNext(context) {
  console.log(context); //
  console.log("ordrer: " + context.fullOrder); //

  const errorsList = [];
  const keys = Object.keys(validation);

  validation = validation[context.stage]

  keys.forEach((key) => {
    const value = validation[key];
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
      if (msg) push({ key, msg });
    } else {
    }
  });
  return errorsList;
}
