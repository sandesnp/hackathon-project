import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import { productGetThunk } from '../redux/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProductList() {
  //array of all products coming in from redux thunk response in productSlice.js
  const Auth = useSelector((state) => state.Auth.data);
  const allProducts = useSelector((state) => state.Product.data.allProduct);
  const dispatch = useDispatch();

  if (!Auth.hasOwnProperty('access')) {
    return <Navigate to='/user/login' replace />;
  } else {
    dispatch(productGetThunk(Auth.access.token));
  }

  const ProductContainer = () => {
    return (
      <div className='product__container'>
        {allProducts.length > 0 &&
          allProducts?.map((product, key) => (
            <Product
              key={key}
              productName={product.name}
              productDescription={product.description}
              productPrice={product.price}
              productImage={'//unsplash.it/500/300'}
            />
          ))}
      </div>
    );
  };

  return (
    <>
      <Navigation />
      <div className='productlist'>
        <ProductContainer />
      </div>
    </>
  );
}
