import React, { useState } from 'react';
import styles from "./style.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');
const navigate = useNavigate()

const handleSubmit = (e) => {
     e.preventDefault();

    const url = "/users/register"
    const data = {
        fullname: username,
        email: email,
        password: password,
        passwordVerification:confirmpassword
    }
    api.post(url, data)
    navigate('/users/login')

}


return (
    <div className={styles.registration_container}>
     <h2>הרשמה</h2>
     <form onSubmit={handleSubmit}>
    <div className={styles.form_group}>
       <label htmlFor="username">:שם משתמש</label>
     <input
     type="text"
     id="username"
     name="username"
     placeholder="הזן שם משתמש"
     value={username}
     onChange={(e) => setUsername(e.target.value)}
     required
       />
   </div>
   <div className={styles.form_group}>
       <label htmlFor="email">:מיייל</label>
       <input
           type="email"
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
           placeholder="בחר סיסמא"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
       />
   </div>
   <div className={styles.form_group}>
       <label htmlFor="ConfirmPassword">:אימות סיסמא</label>
       <input
           type="password"
           id="ConfirmPassword"
           name="ConfirmPassword"
           placeholder="הזן סיסמא"
           value={confirmpassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
           required
       />
   </div>
   <button type="submit" className={styles.btn_register}>הרשמה</button>
                </form>
            </div>
        );
    };

    export default Register