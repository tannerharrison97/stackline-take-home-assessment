import { combineReducers } from 'redux';

import ProductsReducer from './ProductsSlice';

const rootReducer = combineReducers({
    products: ProductsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
