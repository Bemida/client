import React from 'react'
import styles from './style.module.css'
import { useContext } from 'react'
import { DataContext } from '../../Context/MainContext';
import Size from '../../Components/Size';
import Viewer3d from '../../Components/Viewer3d';
import Header from '../../Components/Header';
import ProgressBar from '../../Components/ProgressBar';
import Button from '../../Components/Button';


//Creator : didi - add div to className
//Creator : didi - add context


function Grid() {
  const context = useContext(DataContext)
  const To_Main_Section = {
    1: "componnent_Main_Section",
    2: <Size />,
    3: <Viewer3d />,
    4:<Viewer3d />,
    5: <Viewer3d />
  }
  // const Main_Section = To_Main_Section[2]
  const Main_Section = To_Main_Section[context.order.stageNo]
  return (
    <div className={styles.containerGrid}>
      <Header className={styles.containerHeader} />
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
          <div className={styles.containerBty_ProgressBar}>
            {/* need to add props to the Button */}
            <Button onClick={()=> context.setOrder(prev=> ({...prev, stageNo: prev.stageNo+1}))}/> 
            {console.log(context.Order)}
            {/* <Button icon={'Continued'} text={'NEXT'} color={'#556643'} width={'250px'} onClick={(e=>console.log(e))}/>  */}
            <ProgressBar />
          </div>


        </div>

      </div>
    </div>
  )
}

export default Grid