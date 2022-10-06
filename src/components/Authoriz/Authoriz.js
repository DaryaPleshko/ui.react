import { useState } from 'react';
import style from './Authoriz.module.css';
import { http } from '../../hooks/http.hooks';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../context/auth';

const Authoriz = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const sendRequest = async () => {
        try {
            const data = await http('http://localhost:5000/users/auth', 'POST', { email, password })

            if (data.length) {
                auth.isAuth = true;
                navigate(`/task`, { state: { data: data } });
            }
        } catch (err) {
            console.log(err.message);
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

            <div className={style["create-account"]} onClick={sendRequest}>
                <p className={style["text-create-account"]}>Continue</p>
            </div>

            <div className={style['registration']}>
                <p className={style['question-regis']}>Not a member?</p>
                <Link to={'/register'}><p className={style['click-regis']}>Create an account</p></Link>
            </div>

            <div className={style['image']}></div>
        </div>
    );
}

export default Authoriz;
