import { Link } from 'react-router-dom';
import Register from "../../components/Register/Register";
import style from './RegisterPage.module.css';

const RegisterPage = () => {

    return (
        <div className={style['register-page']}>
            <Register />
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/task'}>Task</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    );

}
export default RegisterPage;