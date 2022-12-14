import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import store from './store/index'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>

);

