import { useState, useEffect } from 'react';
import style from './Tasks.module.css';
import { http } from '../../hooks/http.hooks';
import TaskItem from './TaskItem';
import { user } from '../../context/user';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const GET = async () => {
        try {
            console.log(user.user_id);
            const data = await http(`http://localhost:5000/tasks/${user.user_id}`, 'GET');
            setTasks(data);
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        GET()
    })

    return (
        <>
            <div className={style['wrapper']}></div>
            <p className={style['title']}>Tasks:</p>
            {tasks.length > 0 ? tasks.map((el, index) => <TaskItem key={index} index={index} objtask={el} />) : null}
        </>
    );
}

export default Tasks;