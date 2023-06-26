import styles from "./style.module.css";
import data from "../../Data/fakeData";
import { useEffect, useState } from "react";
import SidebarCollapse from "../SidebarCollapse";
import SidebarTab from "../SidebarTab";

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
              return (<><SidebarCollapse name={tab[0]} onClick={() => handleClick(tab[0])} key={i} />
                  {tab[1].map((tab) => {
                    return <SidebarTab description={tab.description}/>;
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
