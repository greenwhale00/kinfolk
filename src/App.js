import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Magslide from './pages/Magslide';

import './css/basic.scss';



const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />

      </Routes>

      <Magslide />
      <Footer />
    </Wrapper>
  );
}

export default App;
