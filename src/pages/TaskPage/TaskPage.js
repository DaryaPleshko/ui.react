import { Link, useLocation } from 'react-router-dom';
import ToDo from '../../components/ToDo/ToDo';
import TaskManagement from '../../components/TaskManagement/TaskManagement';
import Tasks from '../../components/Tasks/Tasks';
import Menu from '../../components/Menu/Menu';
import style from './TaskPage.module.css';

const TaskPage = () => {
    const { state } = useLocation();
    console.log(state.data);


    return (

        <div className={style['wrapper']}>


            <div className={style['tasks']}>
                <Menu />
                <TaskManagement name={state.data[0].name} />
                <ToDo />

                <div className={style['background']}>
                    <Link to={'/'}><div className={style['btn-log']}>Log Out</div></Link>
                    <div className={style['picture']}><Tasks /></div>
                </div>
            </div>
        </div>
    );

}
export default TaskPage;    