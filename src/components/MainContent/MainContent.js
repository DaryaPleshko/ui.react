import style from './MainContent.module.css';
import { Link } from 'react-router-dom';


const MainContent = () => {
    return (
        <main className={style['main-content']}>
            <div className={style['main']}>
                <p className={style['title']}>Task Management & To-Do List</p>
                <p className={style['text']}>This productive tool is designed to help you better manage your tas conveniently!</p>
                <Link to={'/login'}><div className={style['buttons']}>Let’s Start</div></Link>
                <div className={style['volna']}></div>
            </div>
            <div className={style['picture']}></div>
        </main>
    );
}

export default MainContent;