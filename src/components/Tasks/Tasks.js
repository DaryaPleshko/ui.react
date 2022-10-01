import { useState } from 'react';
import style from './Tasks.module.css';
import { http } from '../../hooks/http.hooks';

const Tasks = () => {

    const [tasks, setTasks] = useState('');


    const GET = async () => {
        try {
            const data = await http('http://localhost:5000/users/auth', 'GET', {tasks})
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <div className={style['wrapper']}>

            <p className={style['title']}>Tasks:</p>

            <div className={style['tasks']} onChange={(event) => setTasks(event.target.value)} >
                <p className={style['first-task']}>1.Empty task</p>
                <p className={style['second-task']}>2.Empty task</p>
                <p className={style['third-task']}>3.Empty task</p>
            </div>

        </div >
    );
}

export default Tasks;