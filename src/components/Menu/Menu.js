import style from './Menu.module.css';

const Tasks = () => {
    return (
        <div className={style['wrapper']}>
            <div className={style['main']}></div>
            <div className={style['menu']}></div>
            <div className={style['setting']}></div>
        </div >
    );
}

export default Tasks;