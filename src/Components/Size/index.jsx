import styles from './style.module.css'
import Input from '../Input'
import Select from '../Select'
import { useState } from 'react';

//Creator : didi -create component

function Size() {

  const [inputText,setInputText] = useState({})
  const [inputValid,setInputValid] = useState({})

  // function checkInput(key) {
  //   return inputText[key] == undefined || inputText[key].length > 0;
  // }

  function settingInput(e) {
    setInputText({ ...inputText, [e.target.id]: e.target.value });
    setInputValid({ ...inputValid, [e.target.id]: e.target.value && e.target.value.length > 0 })  
  }

  return (
    <>
      <div className={styles.title_size}><h1>בחירת מידות ארון</h1></div>
      <div className={styles.containerSize}>
        <div>
          <p>גובה בס"מ</p>
          <Input id ="height" isValid={inputValid["height"] == undefined ? true : inputValid["height"]} onChange = {settingInput} />
          <p>רוחב בס"מ</p>
          <Input id ="width" isValid={inputValid["width"] == undefined ? true : inputValid["width"]} onChange = {settingInput}/>
          <p>עומק בס"מ</p>
          <Input id ="depth" isValid={inputValid["depth"] == undefined ? true : inputValid["depth"]} onChange = {settingInput}/>
          <Select />
        </div>
      </div>
    </>
  )
}

export default Size