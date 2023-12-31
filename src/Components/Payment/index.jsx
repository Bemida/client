import axios from "axios";
import Input from "../Input";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Header from "../Header";
import DisplayCurrentSelection from "../../Layout/DisplayCurrentSelection";
import Button_Payment from "../Button_payment";
// props: {}
// creator: Haya

function Payment(props) {

  // const {fullOrder, setFullOrder}= useContext(DataContext)
  const [inputsObj, setInputsObj] = useState({});
  const [inputsValid, setInputsValid] = useState({});
  const [formData,setFormData  ] = useState({});
  const actualDate = new Date().toISOString().split("T")[0].substring(0, 7);


  function setInput(e) {
    setInputsObj({ ...inputsObj, [e.target.id]: e.target.value });
    // setInputsValid({ ...inputsValid, [e.target.id]: e.target.value && e.target.value.length > 0 })
    setInputsValid({ ...inputsValid, [e.target.id]: undefined || e.target.value.length > 0 })
    // setFullOrder({...fullOrder,userEmail: e.target.value})
   
  }


//  return( isRequired={true} ,onChange={setInput} ,isValid={(inputsValid['#name'] == undefined) ? true : inputsValid["#name"])}

  return (
    <form onSubmit={(e)=>{e.preventDefault, console.log("j")}}> <div className="all">
<Header/> <h4>payment</h4>
<div className={styles.inputs}>
    < div className={styles.paymentPage} style={props.style || {}}  {...props}>
     
      <div className="title"> שם מלא </div>
      <Input  id="#name" type="text" isRequired={true} onChange={(e)=>{setInput,setFormData(formData,...formData.userName=e.target.value)}} isValid={inputsValid['#name'] == undefined ? true : inputsValid["#name"]} />
      <div className="title"> מייל </div>
      <Input id="#mail" type="mail" isRequired={true} onChange={(e)=>{setInput,setFormData(formData,...formData.userEmail=e.target.value)}} isValid={inputsValid['#mail'] == undefined ? true : inputsValid["#mail"]} />
      <div className="title"> טלפון נייד  </div>
      <Input id="#tel" type="number" isRequired={true} onChange={(e)=>{setInput,setFormData(formData,...formData.userPhone=e.target.value)}} isValid={inputsValid['#tel'] == undefined ? true : inputsValid["#tel"]} />
      <div className="title"> תעודת זהות  </div>
      <Input id="#idNumber" type="number" isRequired={true} onChange={setInput}  isValid={inputsValid['#idNumber'] == undefined ? true : inputsValid["#idNumber"]} />
      <div className="title">  מספר כרטיס אשראי </div>
      <Input id="#cardNumber" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#cardNumber'] == undefined ? true : inputsValid["#cardNumber"]} />
      <div className="title"> תוקף </div>
      <Input id="#expirationDate" type="month" isRequired={true} onChange={setInput} min={actualDate} isValid={inputsValid['#expirationDate'] == undefined ? true : inputsValid["#expirationDate"]} />
      <div className="title"> CVV </div>
      <Input id="#CVV" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#CVV'] == undefined ? true : inputsValid["#CVV"]} />
       </div>
    <DisplayCurrentSelection />
    </div>

      <Button_Payment props={formData}/>
    </div></form>
  );
}

export default Payment;
