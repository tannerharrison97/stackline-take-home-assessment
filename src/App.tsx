import React, { useEffect } from 'react';
import './App.css';
import ProductView from './components/product-view/ProductView';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { ProductStatus } from './types/ProductTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './reducers/ProductsSlice';
import { AppDispatch } from './store';
import { selectActiveProductIndex, selectError, selectProducts, selectStatus } from './selectors/ProductSelectors';

import './App.css'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productStatus = useSelector(selectStatus)
  const products = useSelector(selectProducts);
  const activeProductIndex = useSelector(selectActiveProductIndex)
  const productError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(246, 248, 250)'}}>
      <ThemeProvider theme={theme}>
        <Header />
          {productStatus === ProductStatus.LOADING && <div>Loading...</div>}
          {productStatus === ProductStatus.SUCCEEDED && activeProductIndex !== null && <ProductView product={products[activeProductIndex]} />}
          {productStatus === ProductStatus.FAILED && <div>{productError}</div>}
      </ThemeProvider>
    </div>
  );
}

export default App;
