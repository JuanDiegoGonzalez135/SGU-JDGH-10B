import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsuarioForm from './UsuarioForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<UsuarioForm/>} />
      <Route path="/form/:id" element={<UsuarioForm />} />
    </Routes>
  </BrowserRouter>
);