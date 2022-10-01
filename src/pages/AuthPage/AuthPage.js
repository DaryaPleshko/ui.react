import { Link } from 'react-router-dom';
import Authoriz from "../../components/Authoriz/Authoriz";
import style from './AuthPage.module.css';

const AuthPage = () => {

    return (
        <div className={style['auth-page']}>
            <Authoriz />
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/task'}>Task</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    );

}
export default AuthPage;    