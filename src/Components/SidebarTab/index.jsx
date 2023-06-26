import styles from './style.module.css'

function SidebarTab({description}) {
  return (
    <li className={styles.ilCollapse}>
      {/* <img src='' alt=''/> */}
      {description}
    </li>
  )
}

export default SidebarTab
