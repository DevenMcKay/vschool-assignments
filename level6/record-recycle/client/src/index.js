import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserProvider from './context/UserProvider';
import App from './App';

import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </BrowserRouter>
)
