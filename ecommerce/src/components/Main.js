import React, { Component } from 'react';
import Select from './Select';
import Painter from './Painter';
import Left from './Left';


// figure out classnames for left 

let Main = (props) => (

<div className="content">


     <Left />





    <div className="right">


        <Select
        selectChange={props.selectChange} />



      <Painter
        products={props.products}
        text={props.text}
        dropDown ={props.dropDown}
      />






    </div>
</div>

)


export default Main;
