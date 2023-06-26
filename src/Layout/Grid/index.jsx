import React from 'react'
import styles from './style.module.css'
import { useContext } from 'react'
import { DataContext } from '../../Context/MainContext';
import Size from '../../Components/Size';
import Viewer3d from '../../Components/Viewer3d';
// import Header from '../Header';


//Creator : didi - add div to className
//Creator : didi - add context


function Grid() {
  const context = useContext(DataContext)
  const comp_step_3 = "comp_step_3";
  const comp_step_4 = "comp_step_4";
  const comp_step_5 = "comp_step_5";
  const To_Main_Section = {
    1: "componnent_Main_Section",
    2: <Size />,
    3:<Viewer3d /> ,
    // 3: comp_step_3,
    4: comp_step_4,
    5: comp_step_5
  }
  // const Main_Section = To_Main_Section[3]
  const Main_Section = To_Main_Section[context.order.stageNo]
  return (
    <div className={styles.containerGrid}>
      <div className={styles.containerHeader}>

      </div>
      <div className={styles.containerBody}>
        <div className={styles.containerSidebar}>

        </div>
        <div className={styles.containerMain_Section_Details_Bty}>
          <div className={styles.containerMain_Section_Details}>

            <div className={styles.containerDetails}>

            </div>
            <div className={styles.containerMain_Section}>
              {Main_Section}
            </div>
          </div>
          <div className={styles.containerBty}>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Grid