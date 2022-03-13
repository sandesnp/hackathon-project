import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PURGE } from '../redux/AuthSlice';

export default function Navigation() {
  const Auth = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  function gotoLink(e, link) {
    e.preventDefault();
    navigate(link);
  }

  return (
    <nav className='nav'>
      <figure className='nav__logo'>
        <img
          className='nav__logo--image'
          src='//unsplash.it/60/60'
          alt='random unsplash'
        />
      </figure>
      <ul className='nav__lists'>
        <li className='nav__list'>
          <a href='/' onClick={(e) => gotoLink(e, '/')} className='nav__item'>
            Home
          </a>
        </li>
        <li className='nav__list'>
          <a
            href='/product/list'
            onClick={(e) => gotoLink(e, '/product/list')}
            className='nav__item'
          >
            Products
          </a>
        </li>
        <li className='nav__list'>
          <a
            href='/about'
            onClick={(e) => gotoLink(e, '/about')}
            className='nav__item'
          >
            About
          </a>
        </li>
        <li className='nav__list'>
          <a
            href='/contact'
            onClick={(e) => gotoLink(e, '/contact')}
            className='nav__item'
          >
            Contact
          </a>
        </li>

        {Auth.data.hasOwnProperty('access') && (
          <li className='nav__list'>
            <a
              href='/product/create'
              onClick={(e) => gotoLink(e, '/product/create')}
              className='nav__item'
            >
              Product Create
            </a>
          </li>
        )}

        <li className='nav__list nav__right'>
          {Auth.data.hasOwnProperty('access') ? (
            <a
              onClick={(e) => dispatch(PURGE())}
              className='nav__item'
              style={{ cursor: 'pointer' }}
            >
              Logout
            </a>
          ) : (
            <a
              href='/user/login'
              onClick={(e) => gotoLink(e, '/user/login')}
              className='nav__item'
            >
              Login
            </a>
          )}
        </li>
        {!Auth.data.hasOwnProperty('access') && (
          <li className='nav__list'>
            <a
              href='/user/register'
              onClick={(e) => gotoLink(e, '/user/register')}
              className='nav__item'
            >
              Register
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
