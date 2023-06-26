import React from 'react'
import { useState } from 'react'
import SelectButton from '../../Components/SelectorButton'
import styles from './style.module.css'

function Home() {
  // לקבל מהסרבר האם זמין ןכן את הטקסט 
  const [isSelect, setIsSelect] = useState()
  const obgList = [
    { id: 1, titel: " dssss ", isAvailable: true },
    { id: 3, titel: " tabel ", isAvailable: false },
    { id: 4, titel: " tabel ", isAvailable: false },
    { id: 2, titel: " tabel ", isAvailable: false }
  ]
  return <>
    <div className={styles.home}>
      <div className={styles.body}>
          {obgList.map(b => <div key={b.id}> <SelectButton text={b.titel} isAvailable={b.isAvailable}/> </div>)}
      </div>
    </div>
  </>

}
export default Home