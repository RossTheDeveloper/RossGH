import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS = [
  {name:"brand1"},
  {name:"brand2"},
  {name:"brand3"},
  {name:"brand4"},
  {name:"brand5"},
  {name:"brand6"},
  {name:"brand7"},
  {name:"brand8"},
  {name:"brand9"},
];

ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
