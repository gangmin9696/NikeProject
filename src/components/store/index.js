import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/";
import memberReducer from "@/store/";

const store = configureStore({
    reducer: {
        products: productReducer,
        members: memberReducer,
    },
});

export default store;
