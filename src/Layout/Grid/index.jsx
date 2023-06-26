import React from 'react'
import styles from './style.module.css'
// import Header from '../Header';


//Creator : didi - add div to className
// const s1 = "s1";
const s2 = "s2";
const s3 = "s3";
const s4 = "s4";
const s5 = "s5";

const To_Main_Section = {
  // 1: s1,
  // 1: <Header />,
  2: s2,
  3: s3,
  4: s4,
  5: s5
}
// const Main_Section = To_Main_Section[Stage]
// console.log(Stage,"Stage");
function Grid() {
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
              {/* {Main_Section} */}
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