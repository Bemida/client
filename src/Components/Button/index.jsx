import styles from './style.module.css'
import {AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

import React from 'react'

export default function Button({onClick,text, color, width, height, icon }) {
  return (
   
     
        <button type='button' className={styles.button} onClick={onClick} style={{backgroundColor:color, width:width, height:height} }> {icon === "Continued"? (<AiOutlineArrowLeft size={30} style={{marginTop: "3px"}}/>) : (<AiOutlineArrowRight size={30} style={{marginTop: "3px"}} />)} {text} </button>
 
  )
}
