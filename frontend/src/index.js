import React, { useReducer, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './Content.js';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
