import { Link } from 'react-router-dom';
import Register from "../../components/Register/Register";
import style from './RegisterPage.module.css';

const RegisterPage = () => {

    return (
        <div className={style['register-page']}>
            <Register />
        </div>
    );

}
export default RegisterPage;