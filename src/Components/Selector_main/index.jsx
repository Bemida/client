import styles from './style.module.css'
import SelectButton from '../SelectorButton'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../Context/MainContext'
export default function SelectorMain() {
    const [isSelect, setIsSelect] = useState("")
   
    const  {fullOrder,setFullOrder} = useContext(DataContext)
    const context = useContext(DataContext)
    const listCategories = context.newFakeData.items.categories
    const select = (c) => {
        setIsSelect(c.category)
        setFullOrder({...fullOrder, furniture:c.category })
        
    }
    return <>
        <div className={styles.innerText}> <h1>?מה מעצבים היום</h1></div>
        <div className={styles.body}>

            {listCategories.map(c => <div key={c.id} >
                <SelectButton text={c.category} style={isSelect === c.category ? { border: "3px solid black" } : {}} isAvailable={c.isAvailable} onClick={() =>{ select(c)}} /> </div>)}
        </div>
    </>
}
