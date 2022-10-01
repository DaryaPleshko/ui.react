import { Link } from 'react-router-dom';
import ToDo from '../../components/ToDo/ToDo';
import TaskManagement from '../../components/TaskManagement/TaskManagement';
import Tasks from '../../components/Tasks/Tasks';
import Menu from '../../components/Menu/Menu';
import LogOut from '../../components/LogOut/LogOut';
import style from './TaskPage.module.css';

const TaskPage = () => {

    return (

        <div className={style['wrapper']}>


            <div className={style['tasks']}>
                <Menu />
                <TaskManagement />
                <ToDo />
                <Tasks />
                <LogOut />
            </div>

            {/* <div className={style['background']}></div> */}


            <div>
                <Link to={'/'}>Main</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/task'}>Task</Link>
                <Link to={'/profile'}>Profile</Link>
            </div>
        </div>
    );

}
export default TaskPage;    