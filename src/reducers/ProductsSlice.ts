import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductStatus } from '../types/ProductTypes';
import mockProducts from '../data/stackline_frontend_assessment_data_2021.json'

export interface ProductsState {
    products: any[];
    activeProductIndex: number | null;
    status: ProductStatus;
    error: string | null;
}

const initialState: ProductsState = {
    products: [],
    activeProductIndex: null,
    status: ProductStatus.IDLE,
    error: null,
};

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        // Replace this with real api call
        let response: Product[] = [];
        console.log('fetching products')
        await new Promise((resolve) => {
            setTimeout(() => {
                response = mockProducts as Product[];
                resolve(response);
            }, 2000);
        });
        return response;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = ProductStatus.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = ProductStatus.SUCCEEDED;
                // Add fetched products to the state
                state.products = action.payload;
                state.activeProductIndex = 0
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = ProductStatus.FAILED;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default productsSlice.reducer;

export { fetchProducts };