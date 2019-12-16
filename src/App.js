import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import Cards from './components/Cards'
import FormularioL from './components/FormularioL';
import FormularioG from './components/FormularioG';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <div>
          <Carrousel/>
          <Cards/>
        </div>

      </div>      
    );
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <Navbar/>
        <div>
          <FormularioL/>
        </div>
      </div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div>
          <FormularioG/>
        </div>
      </div>
    );
  }
}

export default App;
