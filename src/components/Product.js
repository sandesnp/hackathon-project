import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({
  productName,
  productDescription,
  productPrice = '255',
  productImage = '//unsplash.it/900/500',
}) {
  let navigate = useNavigate();
  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }

  return (
    <>
      <div className='product'>
        <div className='product__image'>
          <img src={productImage} alt='random unsplash' />
        </div>
        <div className='product__container-one'>
          <h1 className='product__title'>{productName}</h1>
          <p className='product__description'>{productDescription}</p>
          <div className='product__container-two'>
            <div className='product__price'>Price {productPrice}</div>
            <a
              className='product__cta'
              href='/product/xyz'
              onClick={(e) => gotoLink(e, '/product/xyz')}
            >
              More &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
