import style from './LogOut.module.css';
import { Link } from 'react-router-dom';

const LogOut = () => {
    return (
        <Link to={'/'}><div className={style['btn-log']}>Log Out</div></Link>
    );
}

export default LogOut;