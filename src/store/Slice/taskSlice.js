import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    try {
        // todo: utiliser axios
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {method: "GET"});
        return response.data;
    } catch (error) {
        console.error('erreur lors du chargement des données', error)
    }
})
const taskSlice = createSlice({
    name: "tasks",
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
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = state.tasks.concat(action.payload)
            })
    }
})

export const {
    setTaskTitle,
    addTask,
    toggleTaskComplete,
    deleteTask
} = taskSlice.actions;

export default taskSlice.reducer;
