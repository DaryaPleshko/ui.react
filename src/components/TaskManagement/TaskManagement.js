import style from './TaskManagement.module.css';


const TaskManagement = ({name}) => {

    return (
        <div className={style['wrapper']}>
            <h1 className={style['logo']}>Hschool</h1>
            <p className={style['title']}>Task Manager</p>
            <p className={style['greetings']}>Hello {name}! Add new tasks with task manager from Hschool</p>
            <div className={style['tasks']}>
                <div className={style['image']}></div>
                <p className={style['num-tasks']}>5</p>
            </div>
        </div>
    );
}

export default TaskManagement;