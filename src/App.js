import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
