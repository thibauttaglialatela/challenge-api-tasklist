// path: taskList/src/component/Form/index.jsx
import {useDispatch} from "react-redux";
import {} from "../../store/Slice/taskSlice.js";

const Form = () => {

    const dispatch = useDispatch()


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
