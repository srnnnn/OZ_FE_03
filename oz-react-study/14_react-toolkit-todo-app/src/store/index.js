//action을 dispath하고 -> redux 함수로 가고 -> 함수에서 리터을하면 store에 있는 state가 변경되고 -> react 컴포넌트가 리렌더링됨

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})