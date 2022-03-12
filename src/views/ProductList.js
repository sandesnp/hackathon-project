import React from 'react';
import Navigation from '../components/Navigation';
import Product from '../components/Product';

export default function ProductList() {
  const ProductContainer = () => {
    return (
      <div className='product__container'>
        <Product />
        <Product />
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
