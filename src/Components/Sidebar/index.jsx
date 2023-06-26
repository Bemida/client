import styles from "./style.module.css";
import data from "../../Data/fakeData";
import { useEffect, useState } from "react";
function SideBar() {
  const tabs = Object.entries(data.items.exterior);
  const [openTab, setOpenTab] = useState();
  // useEffect(() => {

  // },[openTab])
  console.log(tabs);
  const handleClick = (tab) => {
    setOpenTab(tab);
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.sidebarContainer}>
        {tabs.map((tab, i) => {
   if(openTab){
            if(tab[0] === openTab) {
              return (<><ul onClick={() => handleClick(tab[0])} key={i}>{tab[0]}</ul>
                  {tab[1].map((tab) => {
                    return <li>{tab.description}</li>;
                  })}
                </>
              );
            }
        }
           return (
            <ul key={i} onClick={() => handleClick(tab[0])}>
              {tab[0]}
            </ul>
       );
        })}
      </div>
    </div>
  );
}

export default SideBar;
