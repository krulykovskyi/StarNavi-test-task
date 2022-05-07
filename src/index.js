import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';

const modesUrl = 'http://demo7919674.mockable.io';

fetch(modesUrl, { mode: 'cors'})
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<App modes={data}/>);
  });
