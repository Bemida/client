import styles from './style.module.css'

// props: key, value 
// creator: Michael Arlan
//
function CurrentSelectionRow({...props} ) {

  return (
    <div className={styles.name} style={style} {...props}>

        CurrentSelectionRow File 
        
    </div>
  )
}

export default CurrentSelectionRow