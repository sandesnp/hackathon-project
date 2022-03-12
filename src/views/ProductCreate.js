import React from 'react';
import Navigation from '../components/Navigation';

export default function ProductCreate() {
  return (
    <>
      <Navigation />
      <div className='productcreate'>
        <h1 className='productcreate__title'>Create Product</h1>
        <div className='productcreate__container'>
          <div className='productcreate__container--left'>
            <div className='productcreate__container--left__top'>
              <form className='form'>
                <div className='input__group'>
                  <div className='input__title'>Product Name &nbsp;</div>
                  <input type='text' className='input__box' />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Product Price &nbsp;</div>
                  <input type='number' className='input__box' />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Manufacture Date &nbsp;</div>
                  <input type='date' className='input__box' />
                </div>
                <div className='input__group'>
                  <div className='input__title'>Expiry Date &nbsp;</div>
                  <input type='date' className='input__box' />
                </div>
              </form>
            </div>
            <div className='productcreate__container--left__bottom'>
              <div className='productcreate__container--left__bottom--left'>
                <i className='fa-solid fa-cloud-arrow-up productcreate__imageupload__cloudlogo'></i>
                <p>Drag and Drop Here</p>
                <p>or</p>
                <p>Upload Image here</p>
              </div>
              <div className='productcreate__container--left__bottom--right'>
                <i className='fa-solid fa-qrcode productcreate__imageupload__qrlogo'></i>
                <p>Scan Here</p>
              </div>
            </div>
          </div>
          <div className='productcreate__container--right'>
            <button className='productcreate__btn'>Save</button>
            <button className='productcreate__btn'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
