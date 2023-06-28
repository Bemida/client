import styles from "./style.module.css";
import data from "../../Data/fakeDataTest";
import { useEffect, useState, useContext } from "react";
import SidebarCollapse from "../SidebarCollapse";
import SidebarTab from "../SidebarTab";
import { DataContext } from "../../Context/MainContext";

function SideBar({ title }) {
  const tabs = Object.entries(data.items.exterior);
  const [openTab, setOpenTab] = useState();
  // useEffect(() => {
  // },[openTab])
  const { fullOrder, setFullOrder } = useContext(DataContext)

  const handleClick = (tab, description, handleId) => {
    if (description) {
      const key = tab
      setFullOrder({
          ...fullOrder, [key]: description , ...(handleId && { handleId: handleId })
      })
      return
    }
    setOpenTab((prev) => (prev === tab ? null : tab));
  };
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.sidebarContainer}>
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
                    return <SidebarTab handlClick={handleClick} parentName={tab[0]} key={index} description={childTab.description} handleId={tab[0] === "handles" ? childTab.id:undefined} imgSrc={childTab.img}/>;
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
