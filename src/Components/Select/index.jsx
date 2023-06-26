import styles from "./style.module.css";

// props: { {style} , options: [{key:value},{key:value}...] }
// creator: Neri

function Select({ style, options, name, onChange }) {
  return (
    <select style={style} className={styles.select}>
      {options.map((op) => (
        <option value={op.value} className={styles.option}>
          {op.key}
        </option>
      ))}
    </select>
  );
}

export default Select;
