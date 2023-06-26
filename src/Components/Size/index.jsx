import styles from './style.module.css'
import Input from '../Input'
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
      </div>
    </div>
    </>
  )
}

export default Size