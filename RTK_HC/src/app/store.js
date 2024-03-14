import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; //export default todoSlice.reducer;

export const store = configureStore({
    reducer: todoReducer
})