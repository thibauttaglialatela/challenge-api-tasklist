// path: taskList/src/component/Form/index.jsx
import {useDispatch, useSelector} from "react-redux";
import {selectTaskTitle} from "../../store/selector/index.js";
import {addTask, setTaskTitle} from "../../store/Slice/taskSlice.js";

const Form = () => {

    const dispatch = useDispatch()
    const title = useSelector(selectTaskTitle)

    const handleChange = (e) => {
        const {value} = e.target
        dispatch(setTaskTitle(value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '') {
            return
        }
        dispatch(addTask())
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a task</h3>
            <input onChange={handleChange} value={title} type="text" name="title" />
            <input type={"submit"} value={'Add'}/>
        </form>
    )
}

export default Form
