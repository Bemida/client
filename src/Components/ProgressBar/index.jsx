import styles from "./style.module.css";
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";

// creator: Neri

function ProgressBar({context}) {
  // const datacontext = useContext(DataContext);
  // console.log(datacontext.fakeData.stages.stage)

  const options = [
    "סוג רהיט",
    "בחירת מידה",
    "עיצוב חיצוני",
    "עיצוב פנימי",
    "הזמנה",
  ];

  const datacontext = {
    stageNow: context.order.stageNo,
  };

  const reversArr = [...options].reverse();
  return (
    <div className={styles.box}>
    <ul className={styles.ul}>
      {reversArr.map((op, i) => (
        <li
          key={i}
          className={`${styles.li} ${datacontext.stageNow == i + 1 ? styles.stepNow : ""
            }`}
        >{`${i + 1} ${op}`}</li>
      ))}
    </ul>
    </div>
  );
}

export default ProgressBar;
