import styles from "./style.module.css";
import data from "../../Data/fakeData";
import { useEffect, useState, useContext } from "react";
import SidebarCollapse from "../SidebarCollapse";
import SidebarTab from "../SidebarTab";
import { DataContext } from "../../Context/MainContext";

function SideBar({ title }) {
  const tabs = Object.entries(data.items.exterior);
  const [openTab, setOpenTab] = useState();
  // useEffect(() => {
  // },[openTab])
  const { order, setOrder } = useContext(DataContext)

  const handleClick = (tab, description) => {
    if (description) {
      const key = tab
      setOrder({
        ...order, exteriorStyle: {
          ...order.exteriorStyle, [key]: description
        }
      })
      return
    }
    setOpenTab((prev) => (prev === tab ? null : tab));
  };
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.top_container}></div>
        <div className={styles.sidebarContainer}>
          <span className={styles.titleText}>בחירת הסגנון האהוב עליך</span>
          <span>{title}</span>
        
          {/* if(tab[0] === openTab){ */}
          {tabs.map((tab, i) => {
            // if (openTab) {
            if (openTab === tab[1].name) {
              return (
                <SidebarCollapse
                  name={tab[1].name}
                  englishName={tab[0]}
                  openTab={openTab}
                  handleClick={handleClick}
                  key={i}
                >
                  {tab[1].list.map((childTab, index) => {
                    return <SidebarTab handlClick={handleClick} parentName={tab[0]} key={index} description={childTab.description} />;
                  })}
                </SidebarCollapse>)
            }
            return (<SidebarCollapse
              name={tab[1].name}
              openTab={openTab}
              handleClick={handleClick}
              key={i}
            />)
          })}
        </div>
      </div>
    </>
  );
}

export default SideBar;
