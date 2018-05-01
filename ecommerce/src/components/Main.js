import React, { Component } from 'react';
import Select from './Select';
import Painter from './Painter';
import Left from './Left';


// figure out classnames for left

let Main = (props) => (

<div className="content">


     <Left
      sex={props.sex}
      variety={props.variety}/>





    <div className="right">


        <Select
        selectChange={props.selectChange} />



      <Painter
        products={props.products}
        text={props.text}
        dropDown ={props.dropDown}
        gender = {props.gender}
        category={props.category}
      />






    </div>
</div>

)


export default Main;
