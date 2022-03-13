import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ImageProcess from '../images/process.png';
import ImageTable from '../images/table.png';
import { userGetThunk } from '../redux/UserSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.Auth.data);
  let User = useSelector((state) => state.User?.data);
  if (!Auth.hasOwnProperty('access')) {
    return <Navigate to='/user/login' replace />;
  } else {
    dispatch(userGetThunk(Auth.access.token));
  }
  const fullName =
    (User.firstName && User.firstName + ' ') +
    (User.middleName && User.middleName + ' ') +
    (User.lastName && User.lastName);

  return (
    <>
      <Navigation />
      <div className='home'>
        <div className='home__user'>
          <h1>User Information</h1>
          <div className='home__user__input'>
            {fullName} <span></span>
          </div>
          <div className='home__user__input'>
            {User.email}
            <span></span>
          </div>

          <div className='home__user__input'>
            {User.gender} <span></span>
          </div>
          <div className='home__user__input'>
            {User.dateOfBirth} <span></span>
          </div>
        </div>
        <figure className='home__image__center'>
          <img src={ImageProcess} alt='expired food wastage prevention' />
        </figure>
        <div className='separator__vertical'></div>
        <figure className='home__image__right'>
          <img src={ImageTable} alt='expired food wastage prevention' />
        </figure>
      </div>
    </>
  );
}
