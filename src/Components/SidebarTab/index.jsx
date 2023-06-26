import styles from './style.module.css'

function SidebarTab({handlClick,parentName, description}) {
  return (
    
    <li onClick={() => handlClick(parentName, description)} className={styles.ilCollapse}>
      {description}
      {/* <img src='' alt=''/> */}
    </li>
  )
}

export default SidebarTab
