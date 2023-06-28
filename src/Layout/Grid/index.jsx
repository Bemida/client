import styles from "./style.module.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/MainContext";
import Size from "../../Components/Size";
import Viewer3d from "../../Components/Viewer3d";
import Header from "../../Components/Header";
import ProgressBar from "../../Components/ProgressBar";
import Button from "../../Components/Button";
import Selector_main from "../../Components/Selector_main";
import Sidebar from "../../Components/Sidebar";

//Creator : didi - add div to className
//Creator : didi - add context

function Grid() {
  const context = useContext(DataContext);
  const To_Main_Section = {
    1: <Selector_main />,
    // 1: "componnent_Main_Section",
    2: <Size />,
    3: <Viewer3d />,
    4: <Viewer3d />,
    5: <Viewer3d />,
  };
  // const Main_Section = To_Main_Section[2]
  const Main_Section = To_Main_Section[context.order.stageNo];

  return (
    <div className={styles.containerGrid}>
      <div className={styles.h}>
        <Header />
      </div>

      <div className={styles.ms}>
        {Main_Section}
      </div>


      <div className={styles.c}>
        <Button className = {styles.nextButton} onClick={() => context.setOrder(prev => ({ ...prev, stageNo: prev.stageNo + 1 }))} text={'המשך'} />
        <ProgressBar context={context} />
      </div>

      <div className={styles.sr}>
        <Sidebar />
      </div>

      <div className={styles.sl}>

      </div>

    </div>
  );
}

export default Grid;

