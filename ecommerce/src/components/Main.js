import React, { Component } from 'react';
import Select from './Select';
import Left from './Left';
import Products from './Products';
import Search from './Search'
import Modal from './Modal'
import Filters from './Filters'





class Main extends Component {

  state = {
      value: '',
      select:'',
      gender:'',
      style:'',
      color:'',
      modal1:'',
      modal2: false,
      filters:[],
      products:[
        {name:"air max 90w",id:0,view:"view-2",price:50,color:"x",variety:"casual",gender:"female",arrived:"2015-03-27",img:"/images/n1.png"},
        {name:"air max 95g",id:1,view:"view-2",price:70,color:"x",variety:"casual",gender:"male",arrived:"2015-03-29",img:"/images/n2.png"},
        {name:"air max 90b",id:2,view:"view-2",price:95,color:"x",variety:"casual",gender:"female",arrived:"2018-03-29",img:"/images/n3.png"},
        {name:"air zoom blc",id:3,view:"view-2",price:10,color:"x",variety:"casual",gender:"male",arrived:"2018-03-27",img:"/images/n4.png"},
        {name:"air zoom rain",id:4,view:"view-2",price:90,color:"x",variety:"casual",gender:"female",arrived:"2018-03-25",img:"/images/n5.png"},
        {name:"air max 95r",id:5,view:"view-2",price:80,color:"red",variety:"running",gender:"male",arrived:"2017-03-28",img:"/images/n6.png"},
        {name:"air max 95rb",id:6,view:"view-2",price:40,color:"red",variety:"running",gender:"female",arrived:"2017-03-25",img:"/images/n7.png"},
        {name:"air zoom wb",id:7,view:"view-2",price:53,color:"x",variety:"running",gender:"male",arrived:"2017-03-24",img:"/images/n8.png"},
        {name:"air max 270g",id:8,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v1.png"},
        {name:"air max 270r",id:9,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v2.png"},
        {name:"air max 270o",id:10,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v3.png"},
        {name:"flat max 80",id:11,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v4.png"},
        {name:"curve max 70r",id:12,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v5.png"},
        {name:"curve max 70b",id:13,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v6.png"},
        {name:"converse yell",id:14,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v7.png"},
        {name:"nike cleetb",id:15,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v8.png"},
        {name:"converse green",id:16,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v9.png"},
        {name:"air max 90 reds",id:17,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v10.png"},
        {name:"air max 270 yell",id:18,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v11.png"},
        {name:"flat max white",id:19,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v12.png"},
        {name:"sponge max 85",id:20,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v13.png"},
        {name:"converse blc",id:21,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v14.png"},
        {name:"soft max 85",id:22,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v15.png"},
        {name:"white max 85",id:23,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v16.png"},
        {name:"nike retro",id:24,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v17.png"},
        {name:"nike wave",id:25,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v18.png"},
        {name:"air max 95blu",id:26,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v19.png"},
        {name:"nike kleety",id:27,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v20.png"},
        {name:"nike hcleet",id:28,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v21.png"},
        {name:"nike forest",id:29,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v22.png"}
      ]
    };




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

    this.setState((prevState) => {
      if(prevState.filters.includes(filter)) {
        return
      } else {
      return {filters: [...prevState.filters, filter]}
      }
    })
  }




  filterRemove = (e) => {
    let {name} = e.currentTarget

    this.setState((prevState) => {
      let newFilters = prevState.filters.filter((filt) => filt !== name)
      return {filters: newFilters}
    })

    this.setState({[name]:''})
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
            filterUp={this.filterClick}
            gender={this.state.gender}
            style={this.state.style}
            color={this.state.color}/>

          <div className="right">

          <Search value={this.state.value}
            change={this.handleChange} />

          <div className="rightTop">
            <Filters filters={this.state.filters}
                     remove={this.filterRemove}/>

            <Select
            selectChange={this.handleSelect} />
          </div>

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
