import styles from './style.module.css'

// props : label, id, type:text/number, isRequired, isValid
// creator:Haya Aminov - 
//validation:isRequired+ red border if data is not valid

function Input(props) {


    return (


        <div className={styles.name} style={props.style || {}}  {...props}>
            <label className={styles.label} htmlFor={props.id}>{props.label}</label>
            {props.isRequired ?
                <input className={`${styles.input} ${props.isValid ? '' : styles.invalid}`} id={props.id} type={props.type} required />
                : <input className={`${styles.input} ${props.isValid ? '' : styles.invalid}`} type={props.type} id={props.id} />}

        </div>
    )
}

export default Input