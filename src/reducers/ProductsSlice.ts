// Import createAsyncThunk and createSlice from Redux Toolkit
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductStatus } from '../types/ProductTypes';
import mockProducts from '../data/stackline_frontend_assessment_data_2021.json'

// Define a type for the slice state
export interface ProductsState {
  products: any[];
  activeProductIndex: number | null;
  status: ProductStatus;
  error: string | null;
}

// Initial state for the slice
const initialState: ProductsState = {
  products: [],
  activeProductIndex: null,
  status: ProductStatus.IDLE,
  error: null,
};

// Define the async thunk for fetching products
const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // Replace this with real api call
    let response: Product[] = [];
    console.log('fetching products')
    await new Promise((resolve) => {
        setTimeout(() => {
            response = mockProducts as Product[];
            resolve(response); // Resolve the promise with the response
        }, 2000);
    });
    return response;
  }
);

// Create the slice
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

// Export the reducer
export default productsSlice.reducer;

// Export the async thunk
export { fetchProducts };