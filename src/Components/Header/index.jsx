import styles from "./style.module.css";

// props: { logoStyle }
// creator: Neri

function Header({ logoStyle }) {
  return (
    <div className={styles.header}>
      <img
        src="\assets\logo-188 1.png"
        alt="logoURL"
        className={styles.logo}
        style={logoStyle}
      />
    </div>
  );
}

export default Header;
