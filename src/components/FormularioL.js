import React, { Component } from 'react';

class FormularioL extends Component{
    render(){
        return(
            <section>
                <h2 className="Formulario text-center my-sm-5">Formulario de Registro</h2>
                
                <div className="form-group col-md-7">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>

                <div className="form-group col-md-7">
                    <label for="inputPassword4">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña"/>
                </div>

                <div className="form-group col-md-7">
                    <label for="inputName">Nombre</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Nombre(s)"/>
                </div>

                <div className="form-group col-md-7">
                    <label for="inputName">Apellido</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Apellido(s)"/>
                </div>

                <div className="form-group col-md-7">
                        <label for="inputAddress">Dirección</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Calle, colonia, alcaldia,  CP"/>
                </div>

                <div className="form-group col-md-4">
                    <label for="inputState">Colonia</label>
                    <select id="inputState" className="form-control">
                        <option selected>Elige</option>
                        <option>Roma Norte</option>
                        <option>Roma Sur</option>
                        <option>Vergel de Guadalupe</option>
                    </select>
                </div>
        
                <div> 
                    <button id="registro" type="submit" class="btn btn-primary my-3">Registro</button>
                </div>
            </section>
        )
    }
}

export default FormularioL;