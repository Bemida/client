import styles from "./style.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../Functions/API_Calls/apiCalls";

function Register() {
    const [fullName, setFullName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [message, setMassage] = useState(false),
        [passwordVerification, setPasswordVerification] = useState(''),
        navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "/users/register"
        const data = {
            fullName,
            email,
            password,
            passwordVerification
        }
        const result = api.post(url, data)
        if (result === "The user has been registered successfully") {
            navigate('/login');
        } else {
            setMassage("פרטיך שגויים")
            setTimeout(() => {
                setMassage(false)
            }, 15000)
        }
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                        value={passwordVerification}
                        onChange={(e) => setPasswordVerification(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.btn_register}>הרשמה</button>
            </form>
            {message}
        </div>
    );
};

export default Register
