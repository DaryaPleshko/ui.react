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
                <p>1.Empty task</p>
                <p>2.Empty task</p>
                <p>3.Empty task</p>
                <p>4.Empty task</p>
                <p>5.Empty task</p>
            </div>

        </div >
    );
}

export default Tasks;