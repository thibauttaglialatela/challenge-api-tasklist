// path: taskList/src/component/TaskItem/index.jsx
import {useDispatch} from "react-redux";
import {deleteTask, toggleTaskComplete} from "../../store/Slice/taskSlice.js";

const TaskItem = ({task}) => {

    const dispatch = useDispatch()

    const onToggle = () => {
        dispatch(toggleTaskComplete(task.id))
    }

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    return (
        <li>
            <span>{task.title}</span>
            <input onChange={onToggle} type={'checkbox'} checked={task.completed} />
            <button onClick={handleDelete}>X</button>
        </li>
    )
}

export default TaskItem
