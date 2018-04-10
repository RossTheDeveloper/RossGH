import React, { Component } from 'react';
import Select from './Select';
import Painter from './Painter';
import Left from './Left';


// <Painter
//   products={props.products}
//   text={props.text}
//   dropDown ={props.dropDown}
// />

let Main = (props) => (

<div className="content">

     <Left />




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
