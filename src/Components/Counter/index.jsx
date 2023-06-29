import styles from './style.module.css'

import { useEffect, useState } from 'react'

export default function Counter({ defaultNumber, min, max, onChange, name, ...props }) {
  const [count, setCount] = useState(defaultNumber)

  useEffect(() => {

  onChange(count)
  }, [count])
  
  return (
    <div className={styles.counter} >
      <button className={styles.button} onClick={() => { setCount(count + 1) }}>+</button>
      <input type='number' className={styles.input} onChange={(e)=>{
        setCount(e.target.value)
        onChange(e.target.value)
        }} min={min} max={max} value={count} name={name} />
      <button className={styles.button} onClick={() => { setCount(count - 1) }}>-</button>

    </div>
  )
}
