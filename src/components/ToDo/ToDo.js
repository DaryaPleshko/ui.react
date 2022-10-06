import style from './ToDo.module.css';
import { useState } from 'react';
import { http } from '../../hooks/http.hooks';

const ToDo = () => {
    const [dataCreate, setDataCreate] = useState({ task: '' })
    const [dataUpdate, setDataUpdate] = useState({ id: '', task: '' })
    const [dataDelete, setDataDelete] = useState({ id: '' })

    const sendCRUD = async () => {
        try {
            if (dataCreate.task) {
                const data = await http('http://localhost:5000/tasks/user_id', 'POST', { ...dataCreate })
                console.log(data);
                // if (data.length){
                // }
            } else if (dataUpdate.task && dataUpdate.id) {
                const data = await http('http://localhost:5000/tasks/user_id', 'PUT', { ...dataUpdate })
                console.log(data);
                // if (data.length) {

                // }
            } else if (dataDelete.id) {
                const data = await http('http://localhost:5000/tasks/user_id', 'DELETE', { ...dataDelete })
                console.log(data);
                // if (data.length) {

                // }
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className={style['wrapper']}>

            <p className={style['label']}>To do:</p>
            <div className={style['block-flex-column']}>

                <div className={style['block-flex-column']}>
                    <p>Create:</p>
                    <div>
                        <input name='create' placeholder='task' onChange={(event) => setDataCreate({ task: event.target.value })} />
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Update:</p>
                    <div className={style['flex']}>
                        <div>
                            <input name='id_update' placeholder='Number' onChange={(event) => setDataUpdate({ ...dataUpdate, id: event.target.value })} />
                        </div>
                        <div>
                            <input name='update' placeholder='task' onChange={(event) => setDataUpdate({ ...dataUpdate, task: event.target.value })} />
                        </div>
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Delete:</p>
                    <div>
                        <input name='delete' placeholder='Number' onChange={(event) => setDataDelete({ task: event.target.value })} />
                    </div>
                </div>

                <div className={style['btn']} onClick={sendCRUD}>+ save</div>

            </div>
        </div>
    );
}

export default ToDo;