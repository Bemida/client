
import styles from './style.module.css'

export default function Toggle({ defaultChecked, onChange, name, checked }) {
  return (
    <div>
      <label className={styles.switch}>
        <input defaultChecked={defaultChecked} checked={checked} type="checkbox" onChange={(e) => onChange(e.target.checked)} name={name} />
        <span className={styles.slider}></span>
      </label></div>
  )
}
