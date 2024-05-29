import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo : (state, action) => {
            state.push({   //push는 원래 불변성을 지키지 않지만 여기 안에서는 뭐 immer..어쩌고 알아서 해서 괜찮
                id: Date.now(),
                text: action.payload,
                completed: false,
            }) 
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo : (state, action) => {
            const {id, newText} = action.payload;
            const todo = state.find(todo => todo.id === id);
            if(todo) {
                todo.text = newText;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        filterTodo: (state, action) => {
            switch (action.payload) {
                case 'all':
                    return state;
                case 'completed':
                    return state.filter(todo => todo.completed)
                case 'active':
                    return state.filter(todo => !todo.completed)
                default:
                    return state;
            }
        }
    },

})

export const todoReducer = todoSlice.reducer;
export const {addTodo, deleteTodo, toggleTodo, editTodo, filterTodo} = todoSlice.actions;