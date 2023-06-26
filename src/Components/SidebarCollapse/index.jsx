import styles from './style.module.css'
import {IoIosArrowDown} from "react-icons/io"
function SidebarCollapse({name, handleClick, openTab}) {
  return ( <> 
    <ul className={styles.collapseContainer} onClick={() => handleClick && handleClick(name)}>
    {openTab && <div className={styles.arrow}><IoIosArrowDown /></div>}<span>{name}</span> 
    </ul></>
  )
}

export default SidebarCollapse
