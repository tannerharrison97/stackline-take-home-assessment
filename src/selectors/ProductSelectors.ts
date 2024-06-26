import { RootState } from "../reducers";
import { ProductsState } from "../reducers/ProductsSlice";

export const selectProducts = (state: RootState): ProductsState['products'] => state.products.products;
export const selectActiveProductIndex = (state: RootState): ProductsState['activeProductIndex'] => state.products.activeProductIndex;
export const selectStatus = (state: RootState): ProductsState['status'] => state.products.status;
export const selectError = (state: RootState): ProductsState['error'] => state.products.error;