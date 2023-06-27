import styles from "./style.module.css";

// props: { style({}) , options: [{key:"placeholder"},{key:"",value:""},{key:"",value:""}...] }
// creator: Neri

function Select({ options, style, name, onChange }) {
  return (
    <select
      name={name}
      style={style}
      className={styles.select}
      onChange={onChange}
    >
      {options?.map((op, i) => {
        if (i === 0) {
          return (
            <option
              hidden
              value={op.value}
              className={styles.option}
              key={op.value}
            >
              {op.key}
            </option>
          );
        }
        return (
          <option value={op.value} className={styles.option} key={op.value}>
            {op.key}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
