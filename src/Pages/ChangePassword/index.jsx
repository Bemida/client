import styles from './style.module.css'
import { useState } from 'react'
import api from '../../Functions/API_Calls/apiCalls'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


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
        if (password === passwordVerification && api.post("/users/detectingpasswordchange", { password, passwordVerification, token: localStorage.token }) !== "Password changed successfully") {
            setIsEqual(true);
        }
        else {
            navigate("/")
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        localStorage.setItem('token', useParams.token);
    }, []);

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