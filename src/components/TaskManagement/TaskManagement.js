import style from './TaskManagement.module.css';


const TaskManagement = ({ name, index }) => {

    return (
        <div className={style['wrapper']}>
            <h1 className={style['logo']}>Hschool</h1>
            <p className={style['title']}>Task Manager</p>
            <p className={style['greetings']}>Hello, {name}! Add new tasks with task manager from Hschool</p>
            <div className={style['taskCounter-block']}>
                <div className={style['taskCounter-date-count']}>
                    <div className={style['img']}></div>
                    <div className={style['tm-count']}>{index}</div>
                </div>
            </div>
        </div >
    );
}

export default TaskManagement;