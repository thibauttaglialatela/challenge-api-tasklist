// path: taskList/src/component/List/index.jsx
import {useDispatch} from "react-redux";
import TaskItem from "../TaskItem/index.jsx";
import {fetchTasks} from "../../store/Slice/taskSlice.js";

const List = () => {

    // const tasks = useSelector(selectTasks)
    const dispatch = useDispatch();
const tasks = dispatch(fetchTasks());
    return (
        tasks.length > 0 ?
            <ul>
                {
                    tasks.map(task => {
                        return <TaskItem task={task} key={task.id} />
                    })
                }
            </ul> :
            <p>No task</p>
    )
}

export default List
