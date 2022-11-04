import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Magslide from './pages/Magslide';
import Store from './pages/Store';

import './css/basic.scss';



const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Magslide />} />
        <Route path='/sub02' element={<Store />} />

      </Routes>

      <Footer />
    </Wrapper>
  );
}

export default App;
