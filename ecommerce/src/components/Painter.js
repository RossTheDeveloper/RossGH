import React, { Component } from 'react';
import Product from './Product';


let Painter = (props) => {
    let text = props.text.toLowerCase()
    let products0
    let products
    let selectValue = props.dropDown
    let gender = props.gender
    let variety = props.category
    const Prods = [];


    if(variety ==='running'){
      products0 = props.products.filter( x => x.variety === 'running')
    } else if(variety ==='casual'){
      products0 = props.products.filter( x => x.variety === 'casual')
    } else {
      products0 = props.products
    }


    if(gender ==='male'){
      products = products0.filter( x => x.gender === 'male')
    } else if(gender ==='female'){
      products = products0.filter( x => x.gender === 'female')
    } else {
      products = products0
    }



    if(selectValue === "ASC"){
    products.sort((a,b) => (a.price) - (b.price))
    console.log(products)}

    if(selectValue === "DESC"){
    products.sort((a,b) => (b.price) - (a.price))
    console.log(products)}

    if(selectValue === "Alphabetical"){
    products.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
    })
    console.log(products)}

    if(selectValue === "New Arrivals"){
    products.sort(function(a, b){
    if(new Date(a.arrived) < new Date(b.arrived)) return 1;
    if(new Date(a.arrived) > new Date(b.arrived)) return -1;
    return 0;
    })
    console.log(products)}










    products.forEach((each) => {

     if(each.name.toLowerCase().indexOf(text) === -1){
       return;}

      Prods.push(
        <Product
        product={each}
        key={each.name}
        />
      );

  });

    return (
        <div className="Grid">
          {Prods}
        </div>
      )
}







export default Painter;
