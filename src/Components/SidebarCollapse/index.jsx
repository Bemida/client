import styles from './style.module.css'
import {IoIosArrowDown, IoIosArrowBack} from "react-icons/io"
import { DataContext } from '../../Context/MainContext'
import {useContext} from "react"

function SidebarCollapse({name, englishName, handleClick, openTab, children}) {
const  {order} = useContext(DataContext)  
console.log(englishName);
  console.log(order?.exteriorStyle?.englishName);
  return ( <> 
    <ul className={styles.collapseContainer} >
    <div onClick={() => handleClick && handleClick(name)} className={styles.heading}> <div className={styles.arrow}>{openTab === name? (<IoIosArrowDown />) : (<IoIosArrowBack />)}</div>
    <span className={styles.name}>{`${name}${order?.exteriorStyle?.[englishName]? ": " + order?.exteriorStyle[englishName] : ""}`}</span></div>
    <div >{children}</div>
    </ul></>
  )
}

export default SidebarCollapse
