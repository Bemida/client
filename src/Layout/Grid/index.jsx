import React from 'react'
import styles from './style.module.css'
import SelectorMain from '../../Components/Selector_main'
//Creator : didi - add div to className

function Grid() {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.containerHeader}>

      </div>
      <div className={styles.containerBody}>
        <div className={styles.containerSidebar}>
        </div>
        <div className={styles.containerImg_Details_Bty}>
          <div className={styles.containerImg_Details}>
            <div className={styles.containerDetails}>

            </div>
            <div className={styles.containerImg}>
              <SelectorMain />
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