import styles from './style.module.css'

function SidebarTab({handlClick,parentName, description, handleId, imgSrc}) {
  console.log(handleId);
  return (
    
    <li onClick={() => handlClick(parentName, description, handleId && handleId)} className={styles.ilCollapse}>
      {description}
    {imgSrc && <img src={imgSrc} alt=''/> }
    </li>
  )
}

export default SidebarTab
