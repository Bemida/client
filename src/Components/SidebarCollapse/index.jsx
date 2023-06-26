import styles from './style.module.css'

function SidebarCollapse({name, handleClick}) {
  return (
    <ul className={styles.collapseContainer} onClick={() => handleClick(name)}>
            {name}
    </ul>
  )
}

export default SidebarCollapse
