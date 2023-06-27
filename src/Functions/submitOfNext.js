
function validationList(stageNow) {
  switch (stageNow) {
    // value: null or function
    case 1:
      return {
        furniture: null,
        example: () => alert("good")
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
  try {
    const validation = validationList(context.stage);

    const keys = Object.keys(validation);

    keys.forEach((key) => {
      const value = validation[key];
      if (!value) {
        // כאן רק לעשות throw אם יש שגיאה
        // לבדוק אם הוא true בהזמנה
        // context.order...[key] - תחזיר אם הוא

        let valueFromContext = context.fullorder[key];
        if (key.includes("_")) {
          const [key1, key2] = key.split("_");
          valueFromContext = context.fullorder[key1][key2];
        }

        // בדיקה על valueFromContext
        // ואם הוא false להחזיר שגיאה
      } else {
        value();
        // גם- עושה throw אם יש שגיאה
      }
    });
    return true;
  } catch (err) {
    alert(err);
  }
}