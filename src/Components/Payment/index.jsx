import Input from "../Input";
import styles from "./style.module.css";

// props: {}
// creator: Neri

function Payment() {
  // propsInput : labelText,id,type,isRequired,onChange
  return (
    <form className={styles.form}>
      <span>
        <Input labelText="שם מלא" id="#name" type="text" isRequired={true} onChange={setInput} />
      </span>
    </form>
  );
}

export default Payment;
