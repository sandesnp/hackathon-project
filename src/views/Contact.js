import React from 'react';
import Navigation from '../components/Navigation';

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className='contact'>
        <iframe
          className='contact__map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7619.9268047816695!2d23.492448148983865!3d61.48030861939855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468ed16a2395ee57%3A0x400b551554bb940!2s37100%20Nokia%2C%20Finland!5e0!3m2!1sen!2snp!4v1647094217961!5m2!1sen!2snp'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
        <div className='contact__detail'>
          <div>Product Current Location</div>
          <div className='contact__location'>Nargarjun 01, Kathmandu</div>
        </div>
      </div>
    </>
  );
}
