import styles from './style.module.css'
import Input from '../Input'
import Select from '../Select'

//Creator : didi -create component

function Size() {

  return (
    <>
      <h4 className={styles.title_size}>בחירת מידות ארון</h4>
      <div className={styles.containerSize}>
        <div>
          <p>גובה בס"מ</p>
          <Input />
          <p>רוחב בס"מ</p>
          <Input />
          <p>עומק בס"מ</p>
          <Input />
          <Select />
        </div>
      </div>
    </>
  )
}

export default Size