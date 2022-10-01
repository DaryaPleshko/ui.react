import style from './MainContent.module.css';

const MainContent = () => {
    return (
        <main className={style['main-content']}>
            <div className={style['main']}>
                <p className={style['title']}>Task Management & To-Do List</p>

                <p className={style['text']}>This productive tool is designed to help you better manage your tas conveniently!</p>

                <div className={style['buttons']}>Let’s Start</div>

                <div className={style['volna']}></div>
            </div>
            <div className={style['picture']}></div>
        </main>
    );
}

export default MainContent;