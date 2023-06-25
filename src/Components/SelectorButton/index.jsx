import React from 'react'
import styles from './style.module.css'

export default function SelectButton({ isAvailable, text, ...props }) {
    let styleButton = ""
    isAvailable == true ? styleButton = styles.enabled : styleButton = styles.disabled
    return <div>
        <div className={styleButton} onClick>{text}</div>
    </div>
    // tabIndex={0}
}
