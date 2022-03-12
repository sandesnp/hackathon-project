import React from 'react';
import Navigation from '../components/Navigation';

export default function SingleProduct() {
  return (
    <>
      <Navigation />
      <div className='singleproduct'>
        <div className='singleproduct__container'>
          <figure className='singleproduct__image'>
            <img src='//unsplash.it/600/600' alt='random unsplash' />
          </figure>
          <h1 className='singleproduct__title'>
            {' '}
            <em> Lorem Ipsum</em>
          </h1>
          <p className='singleproduct__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            placerat nunc in aliquet elementum. Morbi quis diam massa. Nam
            libero ligula, viverra et neque eu, volutpat rhoncus dolor. Etiam
            luctus vestibulum lacus sed semper. Proin finibus elit a pretium
            feugiat. Morbi auctor pulvinar lorem sed hendrerit. Praesent in
            mollis enim, sed scelerisque nibh. Nunc pellentesque ut lacus ut
            gravida. Aliquam urna ligula, rhoncus quis molestie at, egestas vel
            augue.
          </p>
          <h2 className='singleproduct__price'>
            Price: <span> $200</span>
          </h2>
          <div className='singleproduct__container__bottom'>
            <div className='singleproduct__container__bottom--left'>
              <div className='singleproduct__manufacture'>3/12/22</div>
              <div className='singleproduct__expire'>3/12/22</div>
            </div>
            <div className='singleproduct__container__bottom--right'>
              <div className='singleproduct__location'>Track Location</div>
              <div className='singleproduct__contact'>
                Contact Num: 1234567890
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
