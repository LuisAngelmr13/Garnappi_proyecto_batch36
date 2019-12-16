import React, { Component } from 'react';
import Local from './models/Local'
import RegisterLocales from './RegisterLocales'
import axios from 'axios';

class Locales extends Component {
    constructor(props){
        super(props);
        this.state= {
            cardLocales: [<Local />,<Local />,<Local />,<Local />],
            directores: [],
        }
    };

    componentDidMount(){
        // Consumir el endpoint
        const URL = 'https://tranquil-shelf-14309.herokuapp.com/locales'
        axios.get(URL)
            .then((result) => {
                const respuesta = result.data;
                const arregloDeLocales = respuesta.map(Local => <Local name={director.nombre} />);
                this.setState({
                    locales: arregloDeLocales
                });
            }).catch((err) =>{
                console.log(err);
            });
    }
    
    render(){
    return (
        <section className="row">
            <RegisterLocales></RegisterLocales>
            {this.state.locales}
        </section>
    );
  }
  }
  export default Locales;