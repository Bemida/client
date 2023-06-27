import styles from './style.module.css'

export default function SelectButton({ isAvailable, text, ...props }) {
    let styleButton = ""
    isAvailable == true ? styleButton = styles.enabled : styleButton = styles.disabled
    return <div className={styles.body} >
        <button disabled={!isAvailable} className={styleButton} {...props}>{text}</button>
    </div>
}
