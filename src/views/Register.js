import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();
  const handleUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }

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
            type='text'
            placeholder='firstName'
          />
          <input
            className='credential__input'
            type='text'
            placeholder='middleName'
          />
          <input
            className='credential__input'
            type='text'
            placeholder='lastName'
          />
          <input
            className='credential__input'
            type='text'
            placeholder='dateOfBirth'
          />
          <input
            className='credential__input'
            type='text'
            placeholder='address'
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
        <a
          className='credential__btn credential__btn--right'
          href='/user/login'
          onClick={(e) => gotoLink(e, '/user/login')}
          style={{ marginTop: '1rem' }}
        >
          {' '}
          Login
        </a>
      </form>
    </div>
  );
}
