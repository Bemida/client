import { useState } from "react";
import styles from "./style.module.css";
import { BiLogIn ,BiLogOut,BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'

// props: { logoStyle }
// creator: Neri

function Header({ logoStyle }) {
  const [isLogin, setisLogin] = useState(false)
  return (
    <div className={styles.header}>
      <img
        src="\assets\logo-188 1.png"
        alt="logoURL"
        className={styles.logo}
        style={logoStyle}
      />
      <div className={styles.icon}>
{/* {!isLogin ? (
  ) : (
    <BiLogOut className={styles.iconlogout} onClick={()=>setisLogin(false)} />
  )} */}
  <Link to="/login"><BiUserCircle className={styles.iconlogin}/></Link> 

      </div>
    </div>
  );
}

export default Header;
