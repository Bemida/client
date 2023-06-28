function validationList(stageNow) {
  switch (stageNow) {
    // value: null or function
    // function : if error - do throw
    case 1:
      return {
        furniture: null,
        example: () => alert("not-good"),
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
        handleId: null,
        color: null,
        base: null,
      };
    case 4:
      return {
        section1_drawers: null,
        section1_hangingRod: null,
        section1_shelves: null,
        section2_drawers: null,
        section2_hangingRod: null,
        section2_shelves: null,
      };
    default:
      return {};
  }
}

export default function submitOfNext(context) {
  console.log(context); //
  console.log("ordrer: " + context.fullOrder); //
  try {
    const validation = validationList(context.stage);
    const keys = Object.keys(validation);

    keys.forEach((key) => {
      const value = validation[key];
      if (!value) {
        let valueFromContext = context.fullOrder[key];
        if (key.includes("_")) {
          const [key1, key2] = key.split("_");
          valueFromContext = context.fullOrder[key1][key2];
        }

        if (!valueFromContext) {
          throw "MUST";
        }
      } else {
        value();
      }
    });
    return true;
  } catch (err) {
    console.log(err); //
  }
}
