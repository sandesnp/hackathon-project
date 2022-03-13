import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginThunk } from '../redux/AuthSlice';

function Login(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();
  const handleUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }
  const handleLogin = async (e) => {
    e.preventDefault();

    await props.Login(user);
    if (props.Auth.data.hasOwnProperty('access')) {
      return navigate('/');
    } else {
      console.log(props.Auth.error);
    }
  };

  return (
    <div className='credential'>
      <form className='credential__form-container credential__form-container--right'>
        <h1 className='credential__title'>Let's Login</h1>
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
            type='Password'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleUser}
          />
        </div>

        <button
          className='credential__btn credential__btn--left'
          onClick={handleLogin}
        >
          {' '}
          Login
        </button>
        <a
          className='credential__btn credential__btn--left'
          href='/user/register'
          onClick={(e) => gotoLink(e, '/user/register')}
          style={{ marginTop: '-2rem' }}
        >
          {' '}
          Register
        </a>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (user) => dispatch(loginThunk(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
