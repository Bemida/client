import styles from "./style.module.css";
import data from "../../Data/fakeData";
import { useEffect, useState } from "react";
import SidebarCollapse from "../SidebarCollapse";
import SidebarTab from "../SidebarTab";

function SideBar({title}) {
  const tabs = Object.entries(data.items.exterior);
  const [openTab, setOpenTab] = useState();
  // useEffect(() => {
  // },[openTab])
  console.log(tabs);
  const handleClick = (tab) => {
        setOpenTab((prev) => prev === tab? null : tab)
  };
  console.log(tabs);
  return (<>
    <div className={styles.outerContainer}>
      <div className={styles.sidebarContainer}>
    <span >{title}</span>
        {tabs.map((tab, i) => {
   if(openTab){
            if(tab[0] === openTab) {
              return (<><SidebarCollapse name={tab.name} openTab={openTab} handleClick={handleClick } key={i} >
              <div className={styles.tabsContainer}>
                  {tab[1].map((tab, index) => {
                    return <SidebarTab key={index} description={tab.description}/>;
                  })}
                  </div>
                </SidebarCollapse></>
              );
            }
        }
           return (
            <SidebarCollapse handleClick={handleClick} name={tab[0]} key={i} />
       );
        })}
      </div>
    </div>
    </>);
}

export default SideBar;
