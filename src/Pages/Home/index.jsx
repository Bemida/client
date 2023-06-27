import { useState } from 'react'
import SelectButton from '../../Components/SelectorButton'
import styles from './style.module.css'

function Home() {
  const [isSelect, setIsSelect] = useState("")
  const obgList = [
    { id: 1, titel: " closet ", isAvailable: true },
    { id: 3, titel: " tabel ", isAvailable: false },
    { id: 4, titel: " tabel ", isAvailable: false },
    { id: 55, titel: "closet ", isAvailable: true },
    { id: 98, titel: "tabel ", isAvailable: false }
  ]
  const select = (b) => {
    setIsSelect(b.titel) 
    console.log(b);
 }
  return <>
    <div className={styles.home}>
      <div className={styles.body}>
        {obgList.map(b => <div key={b.id} >
          <SelectButton text={b.titel} style={isSelect===b.titel ?{border:"3px solid black"}:{}} isAvailable={b.isAvailable} onClick={ () =>select(b)} /> </div>)}
      </div> 
    </div>
  </>
}
export default Home