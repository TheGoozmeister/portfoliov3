import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/Router';
import './style/css/style.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

