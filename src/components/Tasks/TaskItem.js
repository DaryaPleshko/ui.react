const TaskItem = ({ objtask, index }) => {
    return (
        <p>{index + 1}) айди: {objtask.id}, задача: {objtask.tasks}</p>
    );
}

export default TaskItem;