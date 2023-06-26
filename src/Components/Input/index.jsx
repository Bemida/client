import styles from './style.module.css'

// props : 
// creator:Haya Aminov - 

//validation/isRequired
function Input(props) {
    //debugger;
    console.log(props.isRequired)

    return (
        // <div className={styles.name} style={style} {...props}>
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {props.isRequired ? <input id={props.id} className='red' type={props.type} required /> : <input className='blue' type={props.type} id={props.id} />}

            {/* <input id={props.id} className='red' type={props.type} required /> */}
        </div>
    )
}

export default Input