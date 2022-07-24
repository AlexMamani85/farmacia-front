import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/products'
import CreateForm from './components/create-form.js'
import UpdateForm from './components/update-form.js'
function App() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/products" element={<Products />} />
      <Route path="/create" element={<CreateForm />} />
      <Route path="/update" element={<UpdateForm />} />

      
    </Routes>

  );
}

export default App;
