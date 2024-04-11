// path: taskList/src/component/List/index.jsx
import {useSelector} from "react-redux";
import TaskItem from "../TaskItem/index.jsx";
import {selectTasks} from "../../store/selector/index.js";

const List = () => {

    const tasks = useSelector(selectTasks)

    return (
        tasks.length > 0 ?
            <ul>
                {
                    tasks.map(task => {
                        return <TaskItem task={task} key={task.id}/>
                    })
                }
            </ul> :
            <p>No task</p>
    )
}

export default List
