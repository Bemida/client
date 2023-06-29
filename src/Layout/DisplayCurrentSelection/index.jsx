import styles from './style.module.css'

import { DataContext } from '../../Context/MainContext'
import { useContext } from 'react'
import { useEffect } from 'react' 
import SelectionRow from '../SelectionRow'
import CurrentSelections from '../../Components/CurrentSelections'


// props : 
// creator: Michael Arlan

function DisplayCurrentSelection({ ...props }) {

  const context = useContext(DataContext)

  const selections = context.order//data.orders 
  //const selections = data.orders 

  
  let ListTitle = selections.furniture//"הארון שלי"

  return (
    <div className={styles.currentSelection}>

      <h3 className={styles.ListTitle}>{ListTitle}</h3>
      <CurrentSelections selections={selections}/>

    </div>
  )
}

export default DisplayCurrentSelection