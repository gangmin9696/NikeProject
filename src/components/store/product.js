import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        category: "all",
    },
    reducers: {
        initProducts(state, action) {
            state.products = action.payload;
        },
        onChangeCategory(state, action) {
            state.category = action.payload;
        },
    },
});

export const { initProducts, onChangeCategory } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get("./assets/data/product.json");
        console.log(response);
        dispatch(initProducts(response.data));
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};
export default productSlice.reducer;
