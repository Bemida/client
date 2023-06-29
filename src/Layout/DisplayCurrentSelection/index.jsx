import { interpolate } from '@react-spring/core'
import styles from './style.module.css'
import { DataContext } from '../../Context/MainContext'
import { useContext, } from 'react'


import data from '../../Data/fakeDataTest' //.orders
import SelectionRow from '../SelectionRow'
import CurrentSelections from '../../Components/CurrentSelections'


// props : 
// creator: Michael Arlan

function DisplayCurrentSelection({ ...props }) {

  const context = useContext(DataContext)

  const selections = context.order//data.orders 
  
   console.log(selections)
 let currentStep = context.fakeData.order.stageNo
  let ListTitle = selections.furniture//"הארון שלי"

  // const keys = Object.keys(selections)
  // console.log(keys);
  return (
    <div className={styles.currentSelection}>

      <h3 className={styles.ListTitle}>{ListTitle}</h3>
      <CurrentSelections selections={selections}/>

    </div>
  )
}




export default DisplayCurrentSelection