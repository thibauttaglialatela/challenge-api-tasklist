import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: "task",
    initialState: {
        task: {
            title: '',
            userId: 1,
            completed: false
        },
        tasks: [],
        id: 101
    },
    reducers: {
        setTaskTitle(state, action) {
            state.task.title = action.payload
        },
        addTask(state, action) {
            state.tasks.push({...state.task, title: state.task.title.trim(), id: state.id})
            state.task.title =  ""
            state.id++
        },
        toggleTaskComplete(state, action) {
            state.tasks = state.tasks.map(task => {
                if(task.id === action.payload) {
                    task.completed = !task.completed
                }
                return task
            })
        },
        deleteTask(state,action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
})

export const {
    setTaskTitle,
    addTask,
    toggleTaskComplete,
    deleteTask
} = taskSlice.actions;

export default taskSlice.reducer;
