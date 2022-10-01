import { useState } from 'react';
import style from './Register.module.css';
import { http } from '../../hooks/http.hooks';
import { Link } from 'react-router-dom';

const RegisterContent = () => {

    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPwd, setConfPwd] = useState('');

    const isValid = (pwd, conpwd) => {
        if (pwd !== conpwd) throw new Error('Повторите пароль')
        return true
    }

    const sendRequest = async () => {
        try {
            isValid(password, confPwd)
            const data = await http('http://localhost:5000/users/register', 'POST', { name, email, password })
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className={style['register-content']}>

            <div className={style['authorization']}>
                <p className={style['question-auth']}>Already have an account?</p>
                <Link to={'/login'}><p className={style['click-auth']}>Sign In</p></Link>
            </div>

            <div className={style['footer']}>
                <p className={style['first-footer']}>Welcome to </p>
                <p className={style['second-footer']}>Hschool</p>
            </div>

            <p className={style['third-footer']}>Join and plan your week with Hschool</p>

            <ul className={style["list-input"]}>
                <li> <input className={style["name"]} placeholder="Full Name" onChange={(event) => setFullName(event.target.value)} /></li>
                <li> <input className={style["email"]} placeholder="Email" onChange={(event) => setEmail(event.target.value)} /></li>
                <li> <input type="password" className={style["password"]} placeholder="Password" onChange={(event) => setPassword(event.target.value)} /></li>
                <li> <input type="password" className={style["confirm-password"]} placeholder="Confirm Password" onChange={(event) => setConfPwd(event.target.value)} /></li>
            </ul>

            <div className={style["create-account"]} onClick={sendRequest}>
                <Link to={'/task'}><p className={style["text-create-account"]}>Create an account</p></Link>
            </div>

            <div className={style['image']}></div>
        </div>
    );
}

export default RegisterContent