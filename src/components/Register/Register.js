import { useState } from 'react';
import style from './Register.module.css';
import { http } from '../../hooks/http.hooks';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../context/auth';

const Register = () => {
    const [name, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPwd, setConfPwd] = useState('');

    const navigate = useNavigate();

    const isValid = (name, email, pwd, conpwd) => {
        if (name.length === 0 || email.length === 0 || pwd.length === 0 || confPwd.length === 0) throw new Error('Вы не ввели всю информацию !');
        if (!/^[а-яА-Яa-zA-Z ]+$/g.test(name)) throw new Error('Некорректно введено ФИО !');
        if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
        if (pwd.length <= 7) throw new Error('Пароль должен содержать минимум 8 символов !');
        if (pwd !== conpwd) throw new Error('Повторите пароль')
        return true;
    }

    const sendRequest = async () => {
        try {
            isValid(name, email, password, confPwd);
            console.log("+");
            const data = await http('http://localhost:5000/users/register', 'POST', { name, email, password });
            console.log(data);
            if (data.length) {
                auth.isAuth = true;
                navigate(`/task`, { state: { data: data } });
            }

        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <div className={style['register-content']}>
            <div className={style['authorization']}>
                <p className={style['question-auth']}>Already have an account?</p>
                <Link to={'/login'}><p className={style['click-auth']}>Sign Up</p></Link>
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
            <div className={style["create-account"]} onClick={sendRequest}>Create an account</div>
            <div className={style['image']}></div>
        </div>
    );
}

export default Register