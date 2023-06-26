import styles from './style.module.css'

export default function SelectButton({ isAvailable, text, ...props }) {
    let styleButton = ""
    isAvailable == true ? styleButton = styles.enabled : styleButton = styles.disabled
    return <div className={styles.body} {...props}>
        <div className={styles.grop}>
            <button className={styleButton}>{text}</button>
        </div>
    </div>
}
