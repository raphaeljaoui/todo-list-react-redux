import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        {id: 1, text:"Courses", done: false},
        {id: 2, text:"Ménages", done: false},
    ],
    reducers: {
        addTask: (state, action) => {
            // {type: "todo/addTask", payload: text}
            const newTask = {
                text: action.payload,
                id: Date.now(),
                done: false,
              };
              state.push(newTask);
        },

        toggleTask: (state, action) => {
        // {type: "todo/toogleTask", payload: id}
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },

        deleteTask: (state, action) => {
            // {type: "todo/deleteTask", payload: id}
            const task = state.filter((t) => t.id !== action.payload);
            return task;
        }

    }
})

export const {addTask, toggleTask, deleteTask} = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo : todoSlice.reducer,
    }
})