import styles from "./style.module.css";
import data from "../../Data/fakeData";
import { useEffect, useState } from "react";
import SidebarCollapse from "../SidebarCollapse";
import SidebarTab from "../SidebarTab";

function SideBar({ title }) {
  const tabs = Object.entries(data.items.exterior);
  const [openTab, setOpenTab] = useState();
  // useEffect(() => {
  // },[openTab])
  console.log(tabs);
  const handleClick = (tab) => {
    setOpenTab((prev) => (prev === tab ? null : tab));
  };
  {
    tabs.map((tab, i) => {
      console.log(tab[1].name);
    });
  }

  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.sidebarContainer}>
          <span>{title}</span>
          {/* if(tab[0] === openTab){ */}
          {tabs.map((tab, i) => {
            // if (openTab) {
              return (
                <SidebarCollapse
                    name={tab[1].name}
                    openTab={openTab}
                    handleClick={handleClick}
                    key={i}
                    >
                  { openTab === tab[1].name &&
                      tab[1].list.map((tab, index) => {
                        return <SidebarTab key={index} description={tab.description}/>;
                      })
                  }
                  </SidebarCollapse>
                );
              // }
            })}

        
        </div>
      </div>
    </>
  );
}

export default SideBar;
