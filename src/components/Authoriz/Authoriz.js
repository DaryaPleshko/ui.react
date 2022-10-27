import { useState } from 'react';
import style from './Authoriz.module.css';
import { http } from '../../hooks/http.hooks';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../context/auth';
import { user } from '../../context/user';

const Authoriz = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const isValide = (email, pwd) => {
        if (email.length === 0 || pwd.length === 0) throw new Error('Вы не ввели всю информацию !');
        if (!/^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]+$/g.test(email)) throw new Error('Некорректно введенный email !');
        return true;
    }

    const sendRequest = async () => {
        try {

            isValide(email, password);
            const data = await http('http://localhost:5000/users/auth', 'POST', { email, password })
            if (data.length) {
                console.log('+');
                auth.isAuth = true;
                user.user_id = data[0].id;
                navigate(`/task`, { state: { data: data } });
            }
        } catch (err) {
            alert(err.message);
        }
    }


    return (
        <div className={style['register-content']}>
            <h1 className={style['logo']}>Hschool</h1>
            <div className={style['footer']}>
                <p className={style['title']}>Welcome to back!</p>
            </div>
            <ul className={style["list-input"]}>
                <li> <input className={style["email"]} placeholder="Email" onChange={(event) => setEmail(event.target.value)} /></li>
                <li> <input type="password" className={style["password"]} placeholder="Password" onChange={(event) => setPassword(event.target.value)} /></li>
            </ul>
            <div className={style["create-account"]} onClick={sendRequest}>Continue</div>
            <div className={style['registration']}>
                <p className={style['question-regis']}>Not a member?</p>
                <Link to={'/register'}><p className={style['click-regis']}>Create an account</p></Link>
            </div>
            <div className={style['image']}></div>
        </div>
    );
}

export default Authoriz;
