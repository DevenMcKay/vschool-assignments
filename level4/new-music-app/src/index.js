import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataContextProvider } from './components/dataContext';


ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
);
