import React, { Component } from 'react';
import Select from './Select';
import Left from './Left';
import Products from './Products';
import Search from './Search'
import Modal from './Modal'




class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:'',
      gender:'',
      style:'',
      color:'',
      modal1:'',
      modal2: false,
      products:[
        {name:"a",id:0,view:"view-2",price:50,color:"x",variety:"casual",gender:"female",arrived:"2015-03-27",img:"/images/n1.png"},
        {name:"b",id:1,view:"view-2",price:70,color:"x",variety:"casual",gender:"male",arrived:"2015-03-29",img:"/images/n2.png"},
        {name:"c",id:2,view:"view-2",price:95,color:"x",variety:"casual",gender:"female",arrived:"2018-03-29",img:"/images/n3.png"},
        {name:"d",id:3,view:"view-2",price:10,color:"x",variety:"casual",gender:"male",arrived:"2018-03-27",img:"/images/n4.png"},
        {name:"e",id:4,view:"view-2",price:90,color:"x",variety:"casual",gender:"female",arrived:"2018-03-25",img:"/images/n5.png"},
        {name:"f",id:5,view:"view-2",price:80,color:"red",variety:"running",gender:"male",arrived:"2017-03-28",img:"/images/n6.png"},
        {name:"g",id:6,view:"view-2",price:40,color:"red",variety:"running",gender:"female",arrived:"2017-03-25",img:"/images/n7.png"},
        {name:"h",id:7,view:"view-2",price:53,color:"x",variety:"running",gender:"male",arrived:"2017-03-24",img:"/images/n8.png"},
        {name:"i",id:8,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v1.png"},
        {name:"j",id:9,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v2.png"},
        {name:"k",id:10,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v3.png"},
        {name:"l",id:11,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v4.png"},
        {name:"zd",id:12,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v5.png"},
        {name:"m",id:13,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v6.png"},
        {name:"n",id:14,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v7.png"},
        {name:"o",id:15,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v8.png"},
        {name:"p",id:16,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v9.png"},
        {name:"q",id:17,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v10.png"},
        {name:"r",id:18,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v11.png"},
        {name:"s",id:19,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v12.png"},
        {name:"t",id:20,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v13.png"},
        {name:"u",id:21,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v14.png"},
        {name:"v",id:22,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v15.png"},
        {name:"w",id:23,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v16.png"},
        {name:"x",id:24,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v17.png"},
        {name:"y",id:25,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v18.png"},
        {name:"z",id:26,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v19.png"},
        {name:"za",id:27,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v20.png"},
        {name:"zb",id:28,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v21.png"},
        {name:"zc",id:29,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v22.png"}
      ]
    };


  }

  handleChange = (e) => {
    this.setState({
      value: e
    })
  }

  handleSelect = (e) => {
    this.setState({
      select:e
    })
  }


  viewOver = (product) => {
    let products = this.state.products;
    products[product.id].view = 'view-1';

    this.setState({
      products
    })
  }

  viewOut = (product) => {
    let products = this.state.products;
    products[product.id].view = 'view-2';

    this.setState({
      products,
    });
  }

  modal = (e) => {
    this.setState({
      modal2: e
    })
  }

  modalPhoto = (e) => {
    this.setState({
      modal1: e
    })
  }




filterClick = (e) => {
  let {filter, type} = e.target.dataset
  this.setState({[filter]: type})

}



  filteredProducts(){
    let text = this.state.value.toLowerCase()
    let products00
    let products0
    let products
    let selectValue = this.state.select
    let gender = this.state.gender
    let style = this.state.style
    let currentColor= this.state.color


    if(currentColor){
      products00 = this.state.products.filter( x => x.color === currentColor)
    } else {
      products00 = this.state.products
    }

    if(style ==='running'){
      products0 = products00.filter( x => x.variety === 'running')
    } else if(style ==='casual'){
      products0 = products00.filter( x => x.variety === 'casual')
    } else {
      products0 = products00
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




     return products.filter((each) =>
      each.name.toLowerCase().indexOf(text) !== -1
  );


}









  render() {
    return (

      <div className="content">

          <Modal modal={this.modal}
              photo={this.state.modal1}
              status={this.state.modal2}/>
           <Left
            filterUp={this.filterClick} />

          <div className="right">

          <Search value={this.state.value}
            change={this.handleChange} />

            <Select
            selectChange={this.handleSelect} />

            <Products products={this.filteredProducts()}
            mouseOver={this.viewOver}
            mouseOut={this.viewOut}
            modal={this.modal}
            modalPhoto={this.modalPhoto}/>

          </div>

          </div>






    );
  }
}

export default Main;
