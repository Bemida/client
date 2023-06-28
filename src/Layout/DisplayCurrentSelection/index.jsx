import { interpolate } from '@react-spring/core'
import styles from './style.module.css'

import { DataContext } from '../../Context/MainContext'
import { useContext } from 'react'


import data  from '../../Data/fakeDataTest' //.orders
import SelectionRow from '../SelectionRow'


// props : 
// creator: Michael Arlan

  const LanguageTranslater = {

    // userName: {heb: "שם", ordinal: 10, postfix: ''},// "John Doe",
    // userPhone: {heb: "טלפון", ordinal: 10, postfix: ''},// "082345678",
    // userEmail: {heb: 'דוא"ל'},// "test@test.com",

    // status: {heb: "סטטוס", ordinal: 10, postfix: ''},// "in_progress",
    // shipping: {heb: "שיטת משלוח", ordinal: 10, postfix: ''},// "regular",
    furniture: {heb: "סוג", ordinal: 10, postfix: ''},// "Closet",
    color: {heb: "צבע", ordinal: 10, postfix: ''},// "red",
    section1: {
        shelves: 3,
        hangingRod: true,
        drawers: 4,
    },
    section2: {
        shelves: 2,
        hangingRod: true,
        drawers: 2,
    },
    material: {heb: "חומר", ordinal: 10, postfix: ''},// "wood",
    height: {heb: "גובה", ordinal: 1, postfix: 'ס"מ'},// 200,
    width: {heb: "רוחב", ordinal: 2, postfix: 'ס"מ'},// 100,
    depth: {heb: "עומק", ordinal: 3, postfix: 'ס"מ'},// 50,
    doors: {heb: "מספר דלתות", ordinal: 10, postfix: ''},// 2,
    // color: {heb: "צבע", ordinal: 10, postfix: ''},// "brown",
    handleId: {heb: "דגם ידית", ordinal: 10, postfix: ''},// "5678",
    stageNo: {heb: "סוג בסיס", ordinal: 10, postfix: ''},// 5,
    base: {heb: "", ordinal: 10, postfix: ''},// "legs",
    // total: 1000,
};




function DisplayCurrentSelection({ ...props }) {

  const context = useContext(DataContext)

  const selections = data.orders  

 let currentStep = context.fakeData.order.stageNo
  let ListTitle = selections.furniture//"הארון שלי"

  // const selections ={} 
  // const selections = context.fakeData.order.order
  const selections = context.fakeData.orders
  let currentStep = context.fakeData.order.stageNo
  let ListTitle = "הארון שלי"


  const keys = Object.keys(selections)
  console.log(keys);
  return (
    <div className="currentSelection">

      <h3 className='ListTitle'>{ListTitle}</h3>

      <ul className='Selectionlist'>

        {/* TODO: add sort() after filter */}
        {keys.filter((v)=>LanguageTranslater[v]).sort((a,b)=>LanguageTranslater[a]['ordinal']<LanguageTranslater[b]['ordinal']).map((k) => 
        <li>{
          typeof selections[k] === 'object' ? k : 
          <SelectionRow bolder= {LanguageTranslater[k]['heb']} regular={selections[k] + ' ' + LanguageTranslater[k]['postfix']}/>
          // <div className='SelectionRow'>
          
          // </div> 
          }
        </li>)}

        {/* for (const a of context.fakeData.order.order)
        {
          a && <li><span className='OderKey'>{a}</span><span className='OderValue'>{Selections[a]}</span></li>
        } */}

        {/* {keys.map((k) => <li><span className='OderKey'>{k}</span><span className='OderValue'>{selections[k]}</span></li>)
        } */}

        {keys.map((k) => Object.is(selections[k]) ? "creaet a coponent tac receivs a key-Value, and returns an <li>" : <li><span className='OderKey'>{k}</span><span className='OderValue'>{selections[k]}</span></li>)
        }


      </ul>

    </div>
  )

}




export default DisplayCurrentSelection