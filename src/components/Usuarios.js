import React, { Component } from 'react';
import axios from 'axios';

class RegisterUsuario extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre: '',
            bio: '',
            edad: 0,
            sexo: 'M',
            nacionalidad:'MX',
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
            alert('Usuario creado exitosamente');
        }).catch((err)=> {
            console.log(err);
            alert('Usuario No creado')
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onClickSubmit}>
                    <label>Nombre</label>
                    <input id="nombre" type="text"
                        onChange={this.onChangeInput} 
                        value={this.state.nombre}
                    >   
                    </input>

                    <label>Bio</label>
                    <input id="bio" type="text" 
                        onChange={this.onChangeInput}
                        value={this.state.bio}
                    >
                    </input>       
                    <label>Edad</label>
                    <input id="edad" type="text"onChange={this.onChangeInput}></input>  
                    <label>Nacionalidad</label>
                    <select id="nacionalidad" onChange={this.onChangeInput}>
                        <option value="MX">Mexicano</option>
                        <option value="BR">Brasileño</option>
                    </select>
                    <label>Sexo</label>
                    <select id="sexo" onChangeInput={this.onChangeInput}>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                    <button type="submit">Guardar usuario</button>

                </form>
            </div>
        )
    }
}
export default RegisterUsuario;