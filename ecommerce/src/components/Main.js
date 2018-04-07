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
      <div className="xx">
        <div className="xx1">GENDER</div>
        <div className="xx2">
        <a href="#">Male</a>
        <a href="#">Female</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1">TYPE</div>
        <div className="xx2">
        <a href="#">Running</a>
        <a href="#">Casual</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1">COLOR</div>
        <div className="xx2">
        <a href="#">Male</a>
        <a href="#">Female</a>
        </div>
      </div>



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
