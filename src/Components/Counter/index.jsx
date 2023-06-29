import styles from './style.module.css'

import { useEffect, useState } from 'react'

export default function Counter({ defaultNumber, min, max, onChange, name, value, ...props }) {
  const [count, setCount] = useState(value)

  useEffect(() => {

    onChange(count)
  }, [count])

  return (
    <div className={styles.counter} >
      <button className={styles.button} onClick={() => { onChange(value + 1) }}>+</button>
      <input type='number' value={value} className={styles.input} readOnly onChange={(e) => {
        setCount(e.target.value)
      }} min={min} max={max} name={name} />
      <button className={styles.button} onClick={() => { onChange(value - 1) }}>-</button>

    </div>
  )
}
