import styles from "./style.module.css";

// props : labelText,id,isRequired,type,onChange
// creator:Haya Aminov -

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      {props.isRequired ? (
        <input
          id={props.id}
          className="red"
          type={props.type}
          required
          onChange={props.onChange}
        />
      ) : (
        <input
          className="blue"
          type={props.type}
          id={props.id}
          onChange={props.onChange}
        />
      )}
    </div>
  );
}

export default Input;
