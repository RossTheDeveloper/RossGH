import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS = [
  {name:"nike brand1",img:require("./images/n1.png")},
  {name:"nike brand2",img:require("./images/n2.png")},
  {name:"nike brand3",img:require("./images/n3.png")},
  {name:"nike brand4",img:require("./images/n4.png")},
  {name:"nike brand5",img:require("./images/n5.png")},
  {name:"nike brand6",img:require("./images/n6.png")},
  {name:"nike brand7",img:require("./images/n7.png")},
  {name:"nike brand8",img:require("./images/n8.png")},
  {name:"nike brand9",img:require("./images/n9.png")},
];


ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
