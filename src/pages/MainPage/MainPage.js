import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";

import style from './MainPage.module.css';

const MainPage = () => {

    return (
        <div className={style['main-page']}>
            <Header />
            <MainContent />
            <Link to={'/'}>Main</Link>
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/task'}>Task</Link>
            <Link to={'/profile'}>Profile</Link>
        </div>
    );

}
export default MainPage;