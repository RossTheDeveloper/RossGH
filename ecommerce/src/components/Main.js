import React, { Component } from 'react';
import Select from './Select';
import Painter from './Painter';
import Left from './Left';


// figure out classnames for left

let Main = (props) => (

<div className="content">


     <Left
      genderUp={props.genderUp}
      styleUp={props.StyleUp}
      color={props.colorClick}/>





    <div className="right">


        <Select
        selectChange={props.selectChange} />



      <Painter
        products={props.products}
        text={props.text}
        dropDown ={props.dropDown}
        gender = {props.gender}
        category={props.category}
        color={props.color}
        mouseOver={props.mouseOver}
        mouseOut={props.mouseOut}
      />






    </div>
</div>

)


export default Main;
