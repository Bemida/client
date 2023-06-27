import styles from './style.module.css'
import { DataContext } from '../../Context/MainContext'
import { useContext } from 'react'
// props : label, id, type:text/number, isRequired, isValid, onChange, min, max
// creator:Haya Aminov - 
//validation:isRequired & red border if data is not valid

function Input(props) {

    return (


        <div className={styles.name} style={props.style || {}}  {...props}>
            <label className={styles.label} htmlFor={props.id}>{props.label}</label>
            {props.isRequired ?
                <input className={`${styles.input} ${props.isValid ? '' : styles.invalid}`} id={props.id} type={props.type} onChange={props.onChange} min={props.min} max={props.max} required />
                : <input className={`${styles.input} ${props.isValid ? '' : styles.invalid}`} type={props.type} id={props.id} onChange={props.onChange} min={props.min} max={props.max} />}

        </div>
    )
}

export default Input