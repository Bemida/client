import React, { useState } from 'react';
import styles from "./style.module.css";
import { Link, useNavigate } from 'react-router-dom'
import api from '../../Functions/API_Calls/apiCalls'
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMassage] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "/users/login"
    const data = {
      email,
      password
    }
    const result = api.post(url, data)
    if (result.token) {
      localStorage.setItem('token', result.token);
      navigate('/')
    } else {
      setMassage('שם משתמש או סיסמא הינם תקינים')
      return false;
    }
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    setMassage("📭 שלחנו לך במייל קישור לאיפוס סיסמא")
    setTimeout(() => {
      setMassage(false)
    }, 15000)

    const url = "/users/changepassword"
    api.put(url, email)
  };



  return (
    <div className={styles.login_container}>
      <h2>התחברות </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="email">:מייל</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="הזן מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">:סיסמא</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="הזן סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btn_login}>התחברות</button>
      </form>

      <div>עדיין אין לך חשבון?
        <Link className={styles.Link} to="/Register">להרשמה</Link>
      </div>
      <div onClick={handleForgetPassword} className={styles.forgetPassword}>שכחתי סיסמא</div>
      {message}
    </div>
  );
};

export default Login;