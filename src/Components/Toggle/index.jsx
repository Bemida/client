
import styles from './style.module.css'

export default function Toggle({defaultChecked, onChange, name}) {
  return (
  <div>
    <label className={styles.switch}>
  <input defaultChecked={defaultChecked}  type="checkbox" onChange={(e)=>onChange(e.target.checked)} name={name}/>
  <span className={styles.slider}></span>
</label></div>
  )
}
