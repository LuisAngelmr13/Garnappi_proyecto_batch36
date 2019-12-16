import React, { Component } from 'react';

class Cards_FormG extends Component {
    render(){
        return(
            <section className="eleccion container mt-md-5 mt-lg-0">
                <h2 className="text-center my-3">Elige tus garnachas favoritas</h2>
                    <div className="row justify-content-center justify-content-md-around">

                        <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/tortas-mexicanas.jpg" class="card-img-top my-3" alt="Torta"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Torta</h5>
                                <button id="torta" href="#" class="btn btn-primary">Click</button>
                            </div>
                        </div>

                        <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/tacos.jpg" className="card-img-top my-3" alt="Tacos"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Tacos</h5>
                                <button id="tacos" href="#" className="btn btn-primary">Click</button>
                            </div>
                        </div>

                        <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/panbazo.jpg" class="card-img-top my-3" alt="Pambazo"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Pambazo</h5>
                                <button id= "pambazo"  href="#" className="btn btn-primary">Click</button>
                            </div>
                        </div>
                    
                        <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/Gorditas.jpg" class="card-img-top my-3" alt="Gorditas"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Gorditas</h5>
                                <button id="gorditas" href="#" className="btn btn-primary">Click</button>
                            </div>
                        </div>

                        <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/flautas.jpg" className="card-img-top my-3" alt="Flautas"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Flautas</h5>
                                <button id="flautas" href="#" className="btn btn-primary">Click</button>
                            </div>
                        </div>

                         <div className="card col-10 col-md-3 mb-3 customCard" style={{width: "18rem"}}>
                            <img src="./assets/Tlacoyos.png" className="card-img-top my-3" alt="Tlacoyos"/>
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">Tlacoyos</h5>
                                <button id="tlacoyos  " href="#" className="btn btn-primary">Click</button>                                </div>
                            </div>
                        </div>
            
                        <div> 
                            <button id="registro" type="submit" class="btn btn-primary my-3">Registro</button>
                        </div>
            </section>

        );
    }
}

export default Cards_FormG;