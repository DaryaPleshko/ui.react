import { Link } from 'react-router-dom';
import style from './ProfilePage.module.css';

const ProfilePage = () => {

    return (
        <div className={style['profile-page']}>
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/task'}>Task</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    );

}
export default ProfilePage;