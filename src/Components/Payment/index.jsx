import Button_Payment from "../Button_payment";
import Input from "../Input";
import styles from "./style.module.css";
import { useState } from "react";
// props: {}
// creator: Haya

function Payment(props) {
  const [inputsObj, setInputsObj] = useState({});
  const [inputsValid, setInputsValid] = useState({});
  const actualDate = new Date().toISOString().split("T")[0].substring(0, 7);

  function setInput(e) {
    setInputsObj({ ...inputsObj, [e.target.id]: e.target.value });
    // setInputsValid({ ...inputsValid, [e.target.id]: e.target.value && e.target.value.length > 0 })
    setInputsValid({ ...inputsValid, [e.target.id]: undefined || e.target.value.length > 0 })
  }

  return (

    < div className={styles.paymentPage} style={props.style || {}}  {...props}>
      <Input label="שם מלא" id="#name" type="text" isRequired={true} onChange={setInput} isValid={inputsValid['#name'] == undefined ? true : inputsValid["#name"]} />
      <Input label="מייל" id="#mail" type="mail" isRequired={true} onChange={setInput} isValid={inputsValid['#mail'] == undefined ? true : inputsValid["#mail"]} />
      <Input label="טלפון נייד" id="#tel" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#tel'] == undefined ? true : inputsValid["#tel"]} />
      <Input label="תעודת זהות" id="#idNumber" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#idNumber'] == undefined ? true : inputsValid["#idNumber"]} />
      <Input label="מספר כרטיס אשראי" id="#cardNumber" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#cardNumber'] == undefined ? true : inputsValid["#cardNumber"]} />
      <Input label="תוקף" id="#expirationDate" type="month" isRequired={true} onChange={setInput} min={actualDate} isValid={inputsValid['#expirationDate'] == undefined ? true : inputsValid["#expirationDate"]} />
      <Input label="CVV" id="#CVV" type="number" isRequired={true} onChange={setInput} isValid={inputsValid['#CVV'] == undefined ? true : inputsValid["#CVV"]} />
      <Button_Payment />
    </div >
  );
}

export default Payment;
