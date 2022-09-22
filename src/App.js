import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Wrapper from './pages/Wrapper';
import Header from './pages/Header';
import Main from './pages/Main';

import './css/basic.scss';



const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>



    </Wrapper>
  );
}

export default App;
