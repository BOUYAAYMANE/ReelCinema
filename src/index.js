import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // 3- kanpartagiw store 3la l app kolha
  <Provider store={store}>
    <App />
  </Provider>
);

