import styles from './style.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight, } from "react-icons/ai"

import React from 'react'
// 
export default function Button({ className = '', onClick, text, color, width, height, icon, isLeft = true }) {
  return (

    <button
      type='button'
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor: color, width: width, height: height }}>
      {isLeft ?
        < AiOutlineArrowLeft
          size={30}
          style={{ marginTop: "3px" }} />
        :
        < AiOutlineArrowRight
          size={30}
          style={{ marginTop: "3px" }} />}
      {text}
    </button>

  )
}


// {icon === "Continued"? (<AiOutlineArrowLeft size={30} style={{marginTop: "3px"}}/>) : (<AiOutlineArrowRight size={30} style={{marginTop: "3px"}} />)}