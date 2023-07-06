import styles from './style.module.css'
import Input from '../Input'
import Select from '../Select'
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../Context/MainContext';
import { number } from 'prop-types';


//Creator : didi -create component

function Size() {

  const [inputText, setInputText] = useState({})
  const [inputValid, setInputValid] = useState({})
  const [selectOption, setSelectOption] = useState()
  const [select, setSelect] = useState()
  const [isShowSelect, setIsShowSelect] = useState()
  const { fullOrder, setFullOrder } = useContext(DataContext);
  // state for select// מעדכן את הסלקט בכמה דלתןת
  // state for sections // 

  function isAvailable(num) {
    return num > 20 && num < 55 ? true : false
  }
  function divide(width, i) {
    return isAvailable(width / i)
  }
  function calcSections() {
    const doors = [1, 2, 3, 4]
    let numOfDoor = [], isPossible
    for (let i of doors) {
      if (divide(inputText.width, i)) {
        numOfDoor.push(i)
      }
    }

    return [{ key: "בחר מספר דלתות" }, ...numOfDoor.map((v) => {
      return { key: `${v} דלתות`, value: v }
    })]
  }

  function calcSectionsNumber(doors) {

    let column = Math.ceil(doors / 2)
    return column

  }



  useEffect(() => {
    if (inputText.height && inputText.width && inputText.depth) {
      let arrDoors = calcSections()
      setSelectOption(arrDoors)
      setIsShowSelect(true)
    }
    else {
      setSelectOption(null)
      setIsShowSelect(false)
    }
  }, [inputText])

  // console.log("selectOption", selectOption);
  // console.log("fullOrder", fullOrder);

  useEffect(() => {
    if (select) {

      const sectionsNumber = calcSectionsNumber(select)

      const obj = {
        shelves: 0,
        hangingRod: false,
        drawers: 0,
      }

      const sections = [...Array(sectionsNumber).keys()].map(num => {
        return obj
      })
      //TODO - create array - "sections"
      setFullOrder(prev => (
        {
          ...prev, doors: select, height: inputText.height, width: inputText.width, depth: inputText.depth, sections: sections
        }))

    }
  }, [select])



  // function checkInput(key) {
  //   return inputText[key] == undefined || inputText[key].length > 0;
  // }
  // console.log("fullOrder",fullOrder);
  function settingInput(e) {
    setInputText({ ...inputText, [e.target.id]: Number(e.target.value) });
    setInputValid({ ...inputValid, [e.target.id]: Number(e.target.value) && e.target.value.length > 0 })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title_size}>בחירת מידות ארון</h1>
      <div className={styles.containerSize}>
        <div>
          <p>גובה בס"מ</p>
          <Input id="height" type="number" isValid={inputValid["height"] == undefined ? true : inputValid["height"]} onChange={settingInput} />
          <p>רוחב בס"מ</p>
          <Input id="width" type="number" min="20" max="220" isValid={inputValid["width"] == undefined ? true : inputValid["width"]} onChange={settingInput} />
          <p>עומק בס"מ</p>
          <Input id="depth" type="number" isValid={inputValid["depth"] == undefined ? true : inputValid["depth"]} onChange={settingInput} />
          {isShowSelect && <Select options={selectOption} onChange={((e) => { setSelect(e.target.value) })} />}
        </div>
      </div>
    </div>
  )
}

export default Size



