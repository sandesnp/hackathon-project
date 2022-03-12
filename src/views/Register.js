import React from 'react';

export default function Register() {
  return (
    <div className='credential'>
      <form className='credential__form-container credential__form-container--left'>
        <h1 className='credential__title'>Register Here</h1>
        <div className='credential__input__container'>
          <input
            className='credential__input'
            type='Email'
            placeholder='Email'
          />
          <input
            className='credential__input'
            type='Phone'
            placeholder='Contact Number'
          />
          <input
            className='credential__input'
            type='Password'
            placeholder='Password'
          />
          <input
            className='credential__input'
            type='Password'
            placeholder='Confirm Password'
          />
        </div>
        <button className='credential__btn credential__btn--right'>
          {' '}
          Signup
        </button>
      </form>
    </div>
  );
}
