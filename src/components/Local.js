import React, { Component } from 'react';
import './card.css'

class Local extends Component {
    constructor(props){
        super(props);
    }
    render(){
    return (
           <div className="card fix-card col-3">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRihq0lI7RBE2TbmjVf-etXVKJIOKktVEykedzL3_v7q4MRvSgH" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{this.props.name}</p>
  </div>
</div>
    );
  }
  }
  export default Local;