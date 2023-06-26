import React, { useState } from 'react'
import styles from './style.module.css'

export default function SelectButton({ isAvailable, text, ...props }) {
    let styleButton = ""
    isAvailable == true ? styleButton = styles.enabled : styleButton = styles.disabled
    if (styleButton == styles.disabled)
    {
        
    }
        return <div className={styles.body}>
            <div className={styles.grop}>
                <button className={styleButton} /*onClick={Selector}*/ >{text}</button>
            </div>
        </div>
}
