import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import List from './features/list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <List title="Ma liste"/>
  </React.StrictMode>
);

