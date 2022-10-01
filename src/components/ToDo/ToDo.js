import style from './ToDo.module.css';
import { useRef, useState } from 'react';
import { http } from '../../hooks/http.hooks';

const ToDo = () => {
    const [data, setData] = useState({
        create: {
            user_id: '',
            tasks: ''
        },
        update: {
            user_id: '',
            tasks: '',
            id: ''
        },
        delete: {
            user_id: '',
            id: ''
        },
    });
    const createRef = useRef('')
    const deleteRef = useRef('')

    const updateRefID = useRef('')
    const updateRefT = useRef('')

    const sendCRUD = async () => {
        try {
            const data = await http('http://localhost:5000/users/auth', 'POST', {})
            console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const generateData = (e) => {
        if (e.target.name === 'create') setData({ ...data, create: { ...data.create, tasks: e.target.value } })
        else if (e.target.name === 'update') {
            if (e.target.name === 'id_update') setData({ ...data, update: { ...data.update, id: e.target.value } })
            else setData({ ...data, update: { ...data.update, tasks: e.target.value } })
        }
        else setData({ ...data, delete: { ...data.delete, id: e.target.value } })
    }

    return (
        <div className={style['wrapper']}>

            <p className={style['label']}>To do:</p>
            <div className={style['block-flex-column']}>

                <div className={style['block-flex-column']}>
                    <p>Create:</p>
                    <div>
                        <input name='create' ref={createRef} placeholder='task' onChange={generateData} />
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Update:</p>
                    <div className={style['flex']}>
                        <div>
                            <input name='id_update' ref={updateRefID} placeholder='Number' onChange={generateData} />
                        </div>
                        <div>
                            <input name='update' ref={updateRefT} placeholder='task' onChange={generateData} />
                        </div>
                    </div>
                </div>

                <div className={style['block-flex-column']}>
                    <p>Delete:</p>
                    <div>
                        <input name='delete' ref={deleteRef} placeholder='Number' onChange={generateData} />
                    </div>
                </div>

                <div className={style['btn']}>+ save</div>

            </div>
        </div>
    );
}

export default ToDo;