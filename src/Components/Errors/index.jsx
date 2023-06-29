import React from 'react'

import styles from './style.module.css'
function Errors({errorsMsg}) {
  return (
    <div className= {styles.errors}><ul>{errorsMsg.map((e,i)=> <li key={i}>{e.msg}</li>)}</ul></div>


function Errors({ errorsMsg }) {
  return (
    <div><ul>{errorsMsg.map((e, i) => <li key={i}>{e.msg}</li>)}</ul></div>

  )
}

export default Errors