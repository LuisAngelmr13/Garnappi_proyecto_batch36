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
            platillos: 'Tortas',
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
        const URL = 'https://guarded-spire-32877.herokuapp.com/locales'
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
                    <h2 className="text-center my-sm-5">Formulario de Registro Locatarios</h2>

                    <div className="text-center form-group col-md-7">
                        <label>Nombre del Local: </label>
                        <input id="nombre" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.nombre}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Dueño del Local:</label>
                        <input id="dueño" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.dueño}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Descripción:</label>
                        <input id="descripcion" type="text" 
                            onChange={this.onChangeInput}
                            value={this.state.descripcion}>
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Horario:</label>
                        <input id="horario" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.horario}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Platillos:</label>
                        <select id="Platillos" onChange={this.onChangeInput}>
                            <option value="Tortas">Tortas</option>
                            <option value="Gorditas">Gorditas</option>
                            <option value="Tacos">Tacos</option>
                            <option value="Consome">Consome</option>
                            <option value="Birria">Birria</option>
                            <option value="Quesadillas">Quesadillas</option>
                            <option value="Pambazos">Pambazos</option>
                            <option value="Tlayudas">Tlayudas</option>
                            <option value="Comida Corrida">Comida Corrida</option>
                            <option value="Comida del Dia">Comida del Dia</option>
                            <option value="Tacos de Canasta">Tacos de Canasta</option>
                            <option value="Barbacoa">Barbacoa</option>
                        </select>
                    </div>

                    <div className="text-center form-group col-md-6">
                        <button id="registro" type="submit" className="btn btn-primary my-3">Guardar Local</button>
                    </div>
                </form>
            </div>

        );
    }

}
export default RegisterLocales;