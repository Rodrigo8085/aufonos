import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import './styles/components.css';
import './styles/pages.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve toda tu aplicación con BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
