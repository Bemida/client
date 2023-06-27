import styles from './style.module.css'
import SelectButton from '../SelectorButton'
import { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../Context/MainContext'
export default function SelectorMain() {
    const [isSelect, setIsSelect] = useState("")
    const context = useContext(DataContext)
    const listCategories = context.fakeData.items.categories
    const select = (c) => {
        setIsSelect(c.category)
        console.log(c);
    }
    return <div>
        <div className={styles.body}>
            {listCategories.map(c => <div key={c.id} >
                <SelectButton text={c.category} style={isSelect === c.category ? { border: "3px solid black" } : {}} isAvailable={c.isAvailable} onClick={() => select(c)} /> </div>)}
        </div>
    </div>
}
