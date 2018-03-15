import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route404} from './404.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

const ProdsA= PRODUCTS
ProdsA.sort((a,b) => (a.price) - (b.price))
console.log(ProdsA)

const ProdsB= PRODUCTS
ProdsB.sort((a,b) => (b.price) - (a.price))
console.log(ProdsB)


// <Router>
// <Link to="/apper">App</Link>
// <Route path="/apper" component={Apper} />
// </Router>

// zzzzzzzzzzz


// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">App</Link>
//         </li>
//         <li>
//           <Link to="/else">elsewhere</Link>
//         </li>
//       </ul>
//
//       <hr />
//
//       <Route exact path="/" component={Apper} />
//       <Route path="/*" component={Route404} />
//     </div>
//   </Router>
// );
//
//
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
//
// const Apper = () => (
// <App products={PRODUCTS}/>
// );

//
// <App products={PRODUCTS}/>



ReactDOM.render(<App products={PRODUCTS}/>, document.getElementById('root'));
registerServiceWorker();
