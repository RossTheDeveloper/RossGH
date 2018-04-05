import React, { Component } from 'react';
import Select from './Select';
import Painter from './Painter';


// <Painter
//   products={props.products}
//   text={props.text}
//   dropDown ={props.dropDown}
// />

let Main = (props) => (

<div className="content">

    <div className="left filters">
      <div className="gender"> q </div>
      <div className="gender"> q </div>
      <div className="gender"> q </div>
    </div>

    <div className="right">
      <div className="rightTop">









        <Select
        selectChange={props.selectChange} />
      </div>




      <Painter
        products={props.products}
        text={props.text}
        dropDown ={props.dropDown}
      />






    </div>
</div>

)


export default Main;
