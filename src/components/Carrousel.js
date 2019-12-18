import React, { Component } from 'react';

class Carrousel extends Component{
    render(){
        return(

            <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.pinimg.com/originals/31/65/4b/31654b857e935b4cc526e9eaa0b4e5e5.jpg" className="imgacm" alt="Garnacha mexicana"/>
                        </div>

                        <div className="carousel-item">
                            <img src="https://somosmexicanos.mx/wp-content/uploads/2018/07/Antojitos-1200x565.png" className="imgacm" alt="Homero comiendo"/>
                        </div>

                        <div className="carousel-item">
                            <img src="https://www.titicupon.com/sites/default/files/imagecache/coupon-slider-responsive/guacamole_ajust_3.jpg" className="imgacm" alt="Gorditas"/>
                        </div>

                        <div className="carousel-item">
                            <img src="https://bocao.com.do/uploads/img27-02-2016-643187036.jpg" className="imgacm" alt="Tacos"/>
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            
        );
    }
}

export default Carrousel;