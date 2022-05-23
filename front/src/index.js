import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { imcStore } from './Redux/Store/imc-store';
import './index.css';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={imcStore}>
    <App />
  </Provider>
);

