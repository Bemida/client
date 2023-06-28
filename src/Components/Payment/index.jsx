import Input from "../Input";
import styles from "./style.module.css";
import { useState } from "react";
// props: {}
// creator: Neri and Haya

function Payment(props) {
  const [inputsObj, setInputsObj] = useState({});
  const [inputsValid, setInputsValid] = useState({});
  const actualDate = new Date().toISOString().split("T")[0].substring(0, 7);

  function setInput(e) {
    setInputsObj({ ...inputsObj, [e.target.id]: e.target.value });
    setInputsValid({ ...inputsValid, [e.target.id]: e.target.value && e.target.value.length > 0 })
  }

  function checkInput(key) {
    return inputsObj[key] == undefined || inputsObj[key].length > 0;
  }

  // propsInput : labelText,id,type,isRequired,onChange
  return (
    <div className={styles.paymentPage} style={props.style || {}}  {...props}>
      <Input label="שם מלא" id="#name" type="text" isRequired={true} onChange={setInput} isValid={checkInput('#name')} />
      <Input label="מייל" id="#mail" type="mail" isRequired={true} onChange={setInput} isValid={checkInput('#mail')} />
      <Input label="טלפון נייד" id="#tel" type="number" isRequired={true} onChange={setInput} isValid={checkInput('#tel')} />
      <Input label="תעודת זהות" id="#idNumber" type="number" isRequired={true} onChange={setInput} isValid={checkInput('#idNumber')} />
      <Input label="מספר כרטיס אשראי" id="#cardNumber" type="number" isRequired={true} onChange={setInput} isValid={checkInput('#cardNumber')} />
      <Input label="תוקף" id="#expirationDate" type="month" isRequired={true} onChange={setInput} min={actualDate} isValid={checkInput('#expirationDate')} />
      <Input label="CVV" id="#CVV" type="number" isRequired={true} onChange={setInput} isValid={checkInput('#CVV')} />

    </div>
  );
}

export default Payment;
