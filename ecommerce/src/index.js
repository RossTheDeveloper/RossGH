import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PRODUCTS = [
  {name:"nike brand1",price:50,img:require("./images/n1.png")},
  {name:"nike brand2",price:70,img:require("./images/n2.png")},
  {name:"nike brand3",price:100,img:require("./images/n3.png")},
  {name:"nike brand4",price:10,img:require("./images/n4.png")},
  {name:"nike brand5",price:90,img:require("./images/n5.png")},
  {name:"nike red1",price:80,img:require("./images/n6.png")},
  {name:"nike red2",price:40,img:require("./images/n7.png")},
  {name:"nike brand8",price:53,img:require("./images/n8.png")},
  {name:"nike brand9",price:99,img:require("./images/n9.png")}
  // {name:"nike brand2",price:50,img:require("./images/n2.png")},
  // {name:"nike brand3",price:50,img:require("./images/n3.png")},
  // {name:"nike brand4",price:50,img:require("./images/n4.png")},
  // {name:"nike brand5",price:50,img:require("./images/n5.png")},
  // {name:"nike red1",price:50,img:require("./images/n6.png")},
  // {name:"nike red2",price:50,img:require("./images/n7.png")},
  // {name:"nike brand8",price:50,img:require("./images/n8.png")},
  // {name:"nike brand9",price:50,img:require("./images/n9.png")}
];


ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
