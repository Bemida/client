import styles from "./style.module.css";

// props: { content:[logoURL,logoStyle] }
// creator: Neri

function Header({ content }) {
  const logoURL = content[0];
  const logoStyle = content[1];
  return (
    <div className={styles.header}>
      <img
        src={logoURL}
        alt="logoURL"
        className={styles.logo}
        style={{ logoStyle }}
      />
      <hr className={styles.hr} />
    </div>
  );
}

export default Header;
