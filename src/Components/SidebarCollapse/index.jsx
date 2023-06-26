import styles from './style.module.css'
import {IoIosArrowDown, IoIosArrowBack} from "react-icons/io"
import { DataContext } from '../../Context/MainContext'
import {useContext} from "react"

function SidebarCollapse({name, handleClick, openTab, children}) {
const  {setOrder} = useContext(DataContext)  
  
  return ( <> 
    <ul className={styles.collapseContainer} onClick={() => handleClick && handleClick(name)}>
    <div className={styles.heading}> <div className={styles.arrow}>{openTab === name? (<IoIosArrowDown />) : (<IoIosArrowBack />)}</div><span className={styles.name}>{name}</span></div>
    <div >{children}</div>
    </ul></>
  )
}

export default SidebarCollapse
