import styles from "./style.module.css";
import { useContext } from "react";
import { DataContext } from "../../Context/MainContext";

// creator: Neri

function ProgressBar() {
  const context = useContext(DataContext);
  console.log(context);

  const options = [
    "סוג רהיט",
    "בחירת מידה",
    "עיצוב חיצוני",
    "עיצוב פנימי",
    "הזמנה",
  ];

  return (
    <ul dir="rtl" className={styles.ul}>
      {options.map((op, i) => (
        <li
          key={i}
          className={`${styles.li} ${context.stage == i + 1 ? styles.stepNow : ""
            }`}
        >{`${i + 1} ${op}`}</li>
      ))}
    </ul>
  );
}

export default ProgressBar;
