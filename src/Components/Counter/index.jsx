// import styles from './style.module.css'

import  { useState } from 'react'

export default function Counter({defaultNumber, min, max, ...props}) {
 const [count, setCount] = useState(defaultNumber)
  return (
    <div  >
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <input type='number' min={{min}} max={{max}} value={count}/>
        <button onClick={()=>{setCount(count-1)}}>-</button>

    </div>
  )
}
