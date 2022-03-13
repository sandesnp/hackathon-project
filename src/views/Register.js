import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterThunk } from '../redux/AuthSlice';

export default function Register() {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth.data);
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    address: '',
  });
  const [message, setMessage] = useState('');
  let navigate = useNavigate();
  const handleUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.password2.value) {
      setMessage("Password doesn't match");

      return setTimeout(() => {
        setMessage('');
      }, 3000);
    }

    await dispatch(userRegisterThunk(user));
    if (Auth.hasOwnProperty('access')) {
      console.log('check1');
      return navigate('/');
    } else {
      console.log('check12');
      console.log(Auth.error);
    }
  };

  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }

  return (
    <div className='credential'>
      <form
        className='credential__form-container credential__form-container--left'
        onSubmit={handleRegister}
      >
        <h1 className='credential__title'>Register Here</h1>
        <div className='credential__input__container'>
          <input
            className='credential__input'
            type='Email'
            placeholder='Email'
            name='email'
            value={user.email}
            onChange={handleUser}
          />

          <input
            className='credential__input'
            type='text'
            placeholder='First Name'
            name='firstName'
            value={user.firstName}
            onChange={handleUser}
          />

          <input
            className='credential__input'
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={user.lastName}
            onChange={handleUser}
          />
          <input
            className='credential__input'
            type='Phone'
            placeholder='Contact Number'
            name='phoneNumber'
            value={user.phone}
            onChange={handleUser}
          />
          <input
            className='credential__input'
            type='text'
            placeholder='Address'
            name='address'
            value={user.address}
            onChange={handleUser}
          />
          <input
            className='credential__input'
            type='Password'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleUser}
          />
          <input
            className='credential__input'
            type='Password'
            placeholder='Confirm Password'
            name='password2'
          />
        </div>
        <div className=''>{message}</div>
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
