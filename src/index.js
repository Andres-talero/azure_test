import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import ListaImagenes from './Componentes/ListaImagenes';
import Contenedor from './Elementos/Contenedor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <Contenedor>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/lista" element={<ListaImagenes />} />
        </Routes>
      </BrowserRouter>
      </Contenedor>
    </>

);