import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter,Route} from 'react-router-dom';
import RegisterLocales from './components/RegisterLocales';
import RegisterGarnachero from './components/RegisterGarnachero';


class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navbar/>
          <main>
            <Route exact path='/' component={Home} />
            <Route exact path='/registerLocal' component={RegisterLocales} />
            <Route exact path='/registerGarnachero' component={RegisterGarnachero} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
