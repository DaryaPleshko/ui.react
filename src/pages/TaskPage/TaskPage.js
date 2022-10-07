import { Link, useLocation } from 'react-router-dom';
import ToDo from '../../components/ToDo/ToDo';
import TaskManagement from '../../components/TaskManagement/TaskManagement';
import Tasks from '../../components/Tasks/Tasks';
import Menu from '../../components/Menu/Menu';
import style from './TaskPage.module.css';

const TaskPage = () => {
    const { state } = useLocation();
    console.log(state.data);

    const addedTasks = async () => {

    }

    return (

        <div className={style['wrapper']}>


            <div className={style['tasks']}>
                <Menu />
                <TaskManagement name={state.data[0].name} />
                <ToDo />
                <div className={style['background']}>
                    <div className={style['picture']}><Tasks /></div>
                </div>
            </div>




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