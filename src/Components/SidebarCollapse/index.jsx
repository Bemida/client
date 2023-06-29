import styles from './style.module.css'
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io"
import { DataContext } from '../../Context/MainContext'
import { useContext } from "react"

function SidebarCollapse({ name, englishName, handleClick, openTab, children }) {
  const { fullOrder } = useContext(DataContext)


  return (<>
    <ul className={styles.collapseContainer} >
      <div onClick={() => handleClick && handleClick(name)} className={styles.heading}> <div className={styles.arrow}>{openTab === name ? (<IoIosArrowDown />) : (<IoIosArrowBack />)}</div>
        <span className={styles.name}>{`${name}${fullOrder?.[englishName] ? ": " + fullOrder?.[englishName] : ""}`}</span></div>
      <div className={styles.liContainer}>{children}</div>
    </ul></>
  )
}

export default SidebarCollapse
