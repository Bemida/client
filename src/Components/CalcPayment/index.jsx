import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './style.module.css'

export default function Rotem() {

  const [total,setTotal] = useState("4,500")

    const text1 = `סה״כ : `
    const text2 = ` ש״ח `
    
  const options = {
    method: 'GET',
    url: 'http://localhost:2023/api/payment',
    headers: {}
  };

useEffect(()=>{
    axios.request(options)
    .then((res)=> setTotal(res.data.results))
    .then((res)=> console.log(res.data.results))
    .catch((err)=>console.log(err))
},[])

  return (
    <div className={styles.total}>
      <h2 dir='rtl'> 
       {text1}{total}{text2}
        </h2>
    </div>
  )
}
