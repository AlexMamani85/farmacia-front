import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products'

function App() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/products" element={<Products />} />
    </Routes>

  );
}

export default App;
