import React from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';

import 'modern-normalize';
import './index.css';

import App from './App.jsx';
import { persistor, store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
