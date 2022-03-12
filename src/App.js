import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import SingleProduct from './views/SingleProduct';
import Contact from './views/Contact';
import ProductCreate from './views/ProductCreate';
import ProductList from './views/ProductList';

import NoPage from './views/NoPage';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/product/xyz' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/create' element={<ProductCreate />} />
          <Route path='/product/list' element={<ProductList />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
