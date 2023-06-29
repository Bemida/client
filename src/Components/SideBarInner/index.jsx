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

    const section = fullOrder.sections


    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <span>{title}</span>
                {section.map((sec, index) => {

                    const list = Object.entries(sec);
                    const onChange = (newVal, key) => {


                        setFullOrder(prev => ({ ...prev, sections: prev.sections.map((sec, i) => i === index ? { ...sec, [key]: newVal } : sec) }))

                    }
                    return (
                        <div key={index} className={styles.allTabs} >
                            <div className={styles.tabContainer}>

                                {openTab === index ? (<IoIosArrowDown />) : (<IoIosArrowBack />)}
                                <div onClick={
                                    () => setOpenTab(openTab === index ? null : index)
                                }>עמודה {index + 1}</div>

                            </div>

                            {openTab === index && list.map((childTab) => {
                                return (
                                    <div className={styles.tab}>
                                        <SidebarInnerTab key={childTab[0]} childTab={childTab} onChange={onChange} />

                                    </div>
                                )
                            })}



                        </div>

                    )
                })}

            </div>
        </div>
    )


}

export default SideBarInner;
