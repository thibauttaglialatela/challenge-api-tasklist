import {configureStore} from "@reduxjs/toolkit";
import taskSlice from "./Slice/taskSlice.js";

export default configureStore({
    reducer: {
        tasks: taskSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        //Middleware personnalisé
    ])
})
