import styles from './style.module.css'

// props : 
// creator:
function Template({style = {} , ...props} ) {

  return (
    <div className={styles.name} style={style} {...props}>

        Template File 
        
    </div>
  )
}

export default Template