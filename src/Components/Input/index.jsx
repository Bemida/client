import styles from './style.module.css'

// props : label, id, type:text/number, isRequired
// creator:Haya Aminov - 

//validation/isRequired
function Input(props) {
    //debugger;
    console.log(props.isRequired)
    const handleChange = (e) => {
        debugger;
        console.log(e.target.value)
    }
    return (
        // <div className={styles.name} style={style} {...props}>
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            {props.isRequired ? <input id={props.id} type={props.type} required onChange={handleChange} min={10} max={20} /> : <input type={props.type} id={props.id} onChange={handleChange} min={10} max={20} />}

            {/* <input id={props.id} className='red' type={props.type} required /> */}
        </div>
    )
}

export default Input