import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import AppProvider from './context/Provider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>,
  );
