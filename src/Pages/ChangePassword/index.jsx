import React from 'react'
import styles from './style.module.css'
import { useState } from 'react'
import api from '../../Functions/API_Calls/apiCalls'
import { useNavigate } from 'react-router-dom'


export default function ChangePassword() {
    const [password, setPassword] = useState("")
    const [passwordVerification, setPasswordVerification] = useState("")
    const [isEqual, setIsEqual] = useState(false);
    const navigate = useNavigate()

    const handelPasswordChange = (e) => {
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        else {
            setPasswordVerification(e.target.value);
        }
    }

    const handelSubmit = (e) => {
        if (password === passwordVerification && api.put(password, passwordVerification, localStorage.token) !== "Password changed successfully") {
            setIsEqual(true);
        }
        else {
            navigate("/")
        }
    }

    return (
        <div className={styles.warp}>
            <p>.איפוס סיסמא</p>
            <p>!קורה לכולנו </p>
            <form method="post">
                <label htmlFor='password'>סיסמא חדשה</label>
                <input type="password" value={password} onInput={handelPasswordChange} name='password' />
                <label htmlFor='passwordVerification'>אימות סיסמא </label>
                <input type="password" value={passwordVerification} onInput={handelPasswordChange} name='passwordVerification' />
                <button type="button" onClick={handelSubmit}>המשך</button>
                {isEqual && "הסיסמא אינה זהה"}
            </form>
        </div>
    )
}