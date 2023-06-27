import styles from './style.module.css'

import { useState } from 'react'

export default function Counter({ defaultNumber, min, max, onChange, name, ...props }) {
  const [count, setCount] = useState(defaultNumber)
  return (
    <div className={styles.counter} >
      <button className={styles.button} onClick={() => { setCount(count + 1) }}>+</button>
      <input type='number' className={styles.input} onChange={onChange} min={min} max={max} value={count} name={name} />
      <button className={styles.button} onClick={() => { setCount(count - 1) }}>-</button>

    </div>
  )
}
