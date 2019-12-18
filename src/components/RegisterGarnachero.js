import React, { Component } from 'react';
import './style.css'
import './RegisterGarnachero'
import axios from 'axios';

class RegisterGarnachero extends Component{
    constructor(props){
        super(props);
        this.state={    
            nombre: '',
            apellidos: '',
            sexo: '',
            nacionalidad:'',
            e_mail: '',
            contrasenia:'',
            platillo_favorito: '',
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
        const URL = 'https://tranquil-shelf-14309.herokuapp.com/usuarios'
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
                    <h2 className="text-center my-sm-5">Formulario de Registro Garnachero</h2>

                    <div className="text-center form-group col-md-7">
                        <label>Nombre: </label>
                        <input id="nombre" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.nombre}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Apellidos:</label>
                        <input id="dueño" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.apellidos}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-6">
                        <label>Nacionalidad</label>
                        <select id="nacionalidad" onChange={this.onChangeInput}>
                            <option value="MX">Mexicano</option>
                            <option value="BR">Brasileño</option>
                        </select>
                    </div>
                    
                    <div className="text-center form-group col-md-6">
                        <label>Sexo</label>
                        <select id="sexo" onChangeInput={this.onChangeInput}>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>E-mail:</label>
                        <input id="e-mail" type="text"
                            onChange={this.onChangeInput} 
                            value={this.state.e_mail}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Contrasenia:</label>
                        <input id="contrasenia" type="password"
                            onChange={this.onChangeInput} 
                            value={this.state.contrasenia}>   
                        </input>
                    </div>

                    <div className="text-center form-group col-md-7">
                        <label>Platillo favorito:</label>
                        <select id="Platillo favorito" onChange={this.onChangeInput}>
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
export default RegisterGarnachero;