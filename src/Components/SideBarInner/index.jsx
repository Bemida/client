import styles from "./style.module.css";
import data from "../../Data/fakeDataTest";
import { useState, useContext } from "react";
import { DataContext } from "../../Context/MainContext";
import SidebarInnerTab from "../SidebarInnerTab";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io"



function SideBarInner({ title }) {
    const tabs = Object.entries(data.items.interior);
   
    const [openTab, setOpenTab] = useState();
    
    const { fullOrder, setFullOrder } = useContext(DataContext);



    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <span>{title}</span>
                {tabs.map((tab) => {
                    if (!tab[1].name) return;
                    const list = Object.entries(data.items.interior[tab[0]].list);
                    const onChange = (newVal, option) => {
                        setFullOrder(prev => ({ ...prev, [tab[1].key]: ({ ...prev[tab[1].key], [option[1].key]: newVal }) }))
   
                    }
                    

                    return (
                        < >
                            <div className={styles.tabContainer}>

                                {openTab === tab[1].name ? (<IoIosArrowDown />) : (<IoIosArrowBack />)}
                                <div onClick={() => setOpenTab(openTab === tab[1].name ? null : (tab[1].name))}>{tab[1].name}</div>

                            </div>

                            <div className={styles.tab}>
                                {openTab === tab[1].name && list.map((childTab) => {
                                    return (
                                        <SidebarInnerTab key={childTab[0]} childTab={childTab} onChange={onChange} />
                                    )
                                })}

                            </div>


                        </>

                    )
                })}

            </div>
        </div>
    )


}

export default SideBarInner;
