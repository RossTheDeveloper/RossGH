import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Route404} from './404.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const PRODUCTS = [
  {name:"a",price:50,arrived:"2015-03-27",img:require("./images/n1.png")},
  {name:"b",price:70,arrived:"2015-03-29",img:require("./images/n2.png")},
  {name:"c",price:100,arrived:"2018-03-29",img:require("./images/n3.png")},
  {name:"d",price:10,arrived:"2018-03-27",img:require("./images/n4.png")},
  {name:"e",price:90,arrived:"2018-03-25",img:require("./images/n5.png")},
  {name:"f",price:80,arrived:"2017-03-28",img:require("./images/n6.png")},
  {name:"g",price:40,arrived:"2017-03-25",img:require("./images/n7.png")},
  {name:"h",price:53,arrived:"2017-03-24",img:require("./images/n8.png")},
  {name:"i",price:99,arrived:"2017-03-23",img:require("./images/n9.png")}
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
