import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "../Slice/MovieSlice";

export const Store =configureStore({
    reducer:{
        movie:MovieSlice,
    }
})