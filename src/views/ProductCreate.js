import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { productRegisterThunk } from '../redux/ProductSlice';
import { userGetThunk } from '../redux/UserSlice';

export default function ProductCreate() {
  const Auth = useSelector((state) => state.Auth.data);
  const dispatch = useDispatch();
  if (!Auth.hasOwnProperty('access')) {
    return <Navigate to='/user/login' replace />;
  } else {
    dispatch(userGetThunk(Auth.access.token));
  }
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    type: 'food',
    specification: '',
    keywords: '',
    manufactureDate: '',
    categoryId: '2',
    expirationDate: '',
  });

  const handleChange = (e) => {
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(productRegisterThunk({ token: Auth.access.token, product }));
  };

  return (
    <>
      <Navigation />
      <div className='productcreate'>
        <h1 className='productcreate__title'>Create Product</h1>
        <div className='productcreate__container'>
          <div className='productcreate__container--left'>
            <div className='productcreate__container--left__top'>
              <form className='form' onSubmit={handleRegister}>
                <div className='input__group'>
                  <div className='input__title'>Product Name &nbsp;</div>
                  <input
                    type='text'
                    className='input__box'
                    name='name'
                    value={product.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Product Price &nbsp;</div>
                  <input
                    type='number'
                    className='input__box'
                    name='price'
                    value={product.price}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Manufacture Date &nbsp;</div>
                  <input
                    type='date'
                    className='input__box'
                    name='manufactureDate'
                    value={product.manufactureDate}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Expiry Date &nbsp;</div>
                  <input
                    type='date'
                    className='input__box'
                    name='expirationDate'
                    value={product.expirationDate}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Description &nbsp;</div>
                  <input
                    type='text'
                    className='input__box'
                    name='description'
                    value={product.description}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Specification &nbsp;</div>
                  <input
                    type='text'
                    className='input__box'
                    name='specification'
                    value={product.specification}
                    onChange={handleChange}
                  />
                </div>
                <div className='input__group'>
                  <div className='input__title'>keywords &nbsp;</div>
                  <input
                    type='text'
                    className='input__box'
                    name='keywords'
                    value={product.keywords}
                    onChange={handleChange}
                  />
                </div>

                <button className='productcreate__btn'>Save</button>
              </form>
            </div>
          </div>
          <div className='productcreate__container--right'>
            <button className='productcreate__btn'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
