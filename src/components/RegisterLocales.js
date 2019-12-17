import React, { Component } from 'react';
import './style.css'
import './RegisterLocales'
import axios from 'axios';

class RegisterLocales extends Component{
    constructor(props){
        super(props);
        this.state={    
            nombre: '',
            dueño: '',
            descripcion: '',
            horario: '',
            platillos: "tortas"
        }
    }
    onChangeInput = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }
    onClickSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue cuando se oprime el btn guardar
        console.log(this.state);
        const URL = 'https://tranquil-shelf-14309.herokuapp.com/locales'
        axios.post(URL, this.state)
        .then((result) => {
            console.log(result);
            alert('Local creado exitosamente');
        }).catch((err)=> {
            console.log(err);
            alert('Local No creado')
        })
    }

    render(){
        return (
            <div className= "row form-group col-md-7 flex">
                <form onSubmit={this.onClickSubmit}>

                    <label>Nombre del Local: </label>
                    <input id="nombre" type="text"
                        onChange={this.onChangeInput} 
                        value={this.state.nombre}
                    >   
                    </input>

                    <label>Dueño del Local:</label>
                    <input id="dueño" type="text"
                        onChange={this.onChangeInput} 
                        value={this.state.dueño}
                    >   
                    </input>
                    <label>Descripción:</label>
                    <input id="descripcion" type="text" 
                        onChange={this.onChangeInput}
                        value={this.state.descripcion}
                    >
                    </input>       
                    <label>Horario:</label>
                    <input id="horario" type="text"
                        onChange={this.onChangeInput} 
                        value={this.state.horario}
                    >   
                    </input> 
                    <label>Platillos:</label>
                    <select id="Platillos" onChange={this.onChangeInput}>
                        <option value="Tortas">Tortas</option>
                        <option value="Gorditas">Gorditas</option>
                    </select>

                    <div>
                    <button type="submit">Guardar Local</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default RegisterLocales;