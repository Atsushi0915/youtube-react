import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreProvidere } from './store/index';
import 'normalize.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvidere>
      <App />
    </StoreProvidere>
  </React.StrictMode>
);


