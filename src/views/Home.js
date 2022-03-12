import React from 'react';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import ImageProcess from '../images/process.png';
import ImageTable from '../images/table.png';

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='home'>
        <div className='home__user'>
          <h1>User Information</h1>
          <div className='home__user__input'>
            Full Name <span></span>
          </div>
          <div className='home__user__input'>
            Full Email <span></span>
          </div>
          <div className='home__user__input'>
            Full Address <span></span>
          </div>
          <div className='home__user__input'>
            Full Gender <span></span>
          </div>
          <div className='home__user__input'>
            Full Date of Birth <span></span>
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
