import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  let navigate = useNavigate();
  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }

  return (
    <>
      <div className='product'>
        <div className='product__image'>
          <img src='//unsplash.it/300/300/' alt='random unsplash' />
        </div>
        <div className='product__container-one'>
          <h1 className='product__title'>Lorem Ipsum</h1>
          <p className='product__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim
            ligula, dictum a tincidunt at, elementum finibus massa. Vivamus in
            enim velit. Nunc fermentum libero viverra cursus bibendum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Maecenas
            eleifend orci eu ipsum semper tempus eget a tortor.
          </p>
          <div className='product__container-two'>
            <div className='product__price'>Price $355</div>
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
