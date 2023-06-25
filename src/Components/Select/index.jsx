import styles from "./style.module.css";

// props: { weight , options: [] }
// creator: Neri

function Select({ weight, options }) {
  return (
    <select style={{ weight: weight }}>
      {options.map((op) => (
        <option>{op}</option>
      ))}
    </select>
  );
}

export default Select;
