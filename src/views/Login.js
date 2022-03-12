import React from 'react';

export default function Login() {
  return (
    <div className='credential'>
      <form className='credential__form-container credential__form-container--right'>
        <h1 className='credential__title'>Let's Login</h1>
        <div className='credential__input__container'>
          <input
            className='credential__input'
            type='Email'
            placeholder='Email'
          />
          <input
            className='credential__input'
            type='Password'
            placeholder='Password'
          />
        </div>

        <button className='credential__btn credential__btn--left'>
          {' '}
          Login
        </button>
        <button
          className='credential__btn credential__btn--left'
          style={{ marginTop: '-2rem' }}
        >
          {' '}
          Register
        </button>
      </form>
    </div>
  );
}
