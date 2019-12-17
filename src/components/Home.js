import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import Navbar from './Navbar';
import Carrousel from './Carrousel';
import Cards from './Cards';

class Home extends Component {
    render(){
      return (
        <div>
          
            <Carrousel/>
        
          
            <Cards/>
        
        </div>      
      );
    }
  }

  export default Home;