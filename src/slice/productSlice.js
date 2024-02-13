import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

const productSlice = createSlice({
    initialState,
    name: 'product',
    reducers: {
        fetchProducts(state, action) {
            state.products = action.payload;
        },
    },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;


export function getProductList(props) {
    return async function getProducts(dispatch, getState) {
        const productData = await fetch(`${process.env.REACT_APP_API_URL}products`).then((data) => data.json());
        dispatch(fetchProducts(productData));
    };

}