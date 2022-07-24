import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products'
import CreateForm from './components/create-form.js'
function App() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/products" element={<Products />} />
      <Route path="/create" element={<CreateForm />} />

      
    </Routes>

  );
}

export default App;
