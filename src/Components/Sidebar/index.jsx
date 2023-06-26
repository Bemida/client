import styles from "./style.module.css"
import data from "../../Data/fakeData"
function SideBar() {
    const newData = [...data.items.styling[0].interior];
    console.log(newData);
  return (
    <div className={styles.outerContainer}>
    <div className={styles.sidebarContainer}>
    </div>

    </div>
  )
}

export default SideBar
