import styles from './style.module.css'

function SidebarTab({description}) {
  return (
    <li className={styles.ilCollapse}>
      {description}
    </li>
  )
}

export default SidebarTab
