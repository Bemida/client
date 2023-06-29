import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Rotem() {

  const [total,setTotal] = useState("4,500")

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
    <div>
      <h2>ש״ח{total}:סה״כ</h2>
    </div>
  )
}
