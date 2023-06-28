import styles from './style.module.css'

// props: bolder, regular 
// creator: Michael Arlan
//


// const LanguageTranslater = {

  // userName: {heb: "שם", ordinal: 10, postfix: ''},// "John Doe",
  // userPhone: {heb: "טלפון", ordinal: 10, postfix: ''},// "082345678",
  // userEmail: {heb: 'דוא"ל'},// "test@test.com",

  // status: {heb: "סטטוס", ordinal: 10, postfix: ''},// "in_progress",
  // shipping: {heb: "שיטת משלוח", ordinal: 10, postfix: ''},// "regular",

function SelectionRow({bolder, regular} ) {
  return (
  <p>
    {/* <strong>{LanguageTranslater[bolder]['heb']}</strong>{regular +  + ' ' + LanguageTranslater[bolder]['postfix']} */}
    <strong>{bolder+': '}</strong>{regular }
  </p>
)}

// export default {SelectionRow, LanguageTranslater}
export default SelectionRow