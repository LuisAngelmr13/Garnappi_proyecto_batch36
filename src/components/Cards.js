import React, { Component } from 'react';


class Cards extends Component {
    render(){
        return(
            <section>
                
            <h1 className="textopri my-3">"Que son las garnachas...!!??"</h1>

            <p className="texto1">El término garnacha, en algunas partes de México se utiliza para denominar, casi de manera    genérica,
              a la comida que se vende en las calles, pues este tipo de venta es muy común en el país y se pueden encontrar
              puestos en mercados, zonas de oficinas, terminales de transporte y cualquier lugar que implique un tránsito continuo
              de personas.
              Siempre se tiene por seguro que no importa la calle o vulebar que tracites siempre te encontraras con este gastronomico manjar el antojito que todo mexicano desea a la hora del break no me dejaras mentir, ya sean pambazos, gorditas, quesadillas, zopes y no puede faltar la gran variedad en tacos, tacos de cansta, los tradicionales de carnitas, campechanos, tripa, maciza en fin todo lo aderesado con grasa y que sabe tan exquicita. Y aqui te ofrecemos solo algunos de los mejores lugares para ir a disfrutar solo o acompañado de este manjar de mexico.
            </p>
            <section className="row justify-content-center justify-content-md-around my-4">

                <div className="card-styler" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111); "}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9anZ--3c2aqPhF2Q_7ETI2RXWK88rO4W0NtKNXw0SFn9BXdBrA&amp;s"
                    className="card-img-top" alt="tortas de carnitas"/>
                    <div className="card-body d-flex flex-column align-items-center" className="stylecards">
                        <h5 className="card-title">La Texcocana</h5>
                        <p className="card-text">Una de las mejores opciones para aquellos amantes de las tortas de carnitas y vacalao</p>
                    </div>
                     <ul className="list-group list-group-flush">
                        <li className="list-group-item">Direccion: Av Independencia 87 A, Colonia Centro, Centro, Cuauhtémoc, 06050 Ciudad de México, CDMX</li>
                        <li className="list-group-item">Horario: Lunes a Sabado de 10:00 a 19:00</li>
                        <li className="list-group-item">Teléfono: 55 5521 7871</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info</a>
                    </div>
                </div>

                <div className="card-styler my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111); "}}>
                    <img src="https://img.chilango.com/2017/08/machetes.jpg" className="card-img-top" alt="Los pollitos"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">Los Pollitos</h5>
                        <p className="card-text"> La joya de la casa es el taco placero, con chicharroncito, ensalada de nopales, aguacate y queso fresco.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Dirección: 37,, José Toribio Medina 27, Algarín, Cuauhtémoc, 06880 Ciudad de México, CDMX</li>
                        <li className="list-group-item">Horario: fines de semana solamente viernes a domingo de 09:00 a 17:00</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info.</a>
                    </div>
                </div>

                <div className="card my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111)"}}>
                    <img src="https://i.pinimg.com/originals/ea/ff/a9/eaffa934c81264d1941039f1cd1e3e14.jpg" className="card-img-top" alt="gorditas"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">Mi Esperanza</h5>
                        <p className="card-text">Hacen unas gorditas de carnitas muy ricas. La salsa roja tipo pico de gallo es buenísima para acompañarlas.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Dirección: Av. Jardin 469, Aguilera, Azcapotzalco, 02900 Ciudad de México, CDMX </li>
                        <li className="list-group-item">Horario: de Miercoles a Lunes de 10:00 a 18:00 hrs</li>
                        <li className="list-group-item">Teléfono: 55 5355 0648</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info.</a>
                    </div>
                </div>

                <div className="card my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111)"}}>
                    <img src="https://i.pinimg.com/originals/64/b6/63/64b66325751af8f88382e72de85750c0.jpg" className="card-img-top" alt="Tacos de cabeza"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">Tacos de cabeza "Lolita"</h5>
                        <p className="card-text"> Tacos de cabeza con salsita roja, los de cachete son ganadores.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Direccion: Morelia y Colima, frente a Pizza Peppino.</li>
                        <li className="list-group-item">Horario: Luunes a Viernes: 14:00 a 23:00 Sabados a Domingos: 16:00 a 23:00hrs</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info.</a>
                    </div>
                </div>
         
                <div className="card my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111)"}}>
                    <img src="https://i.pinimg.com/originals/45/79/31/457931cc53ff878f021828535c066cc6.jpg" class="card-img-top" alt="los machetes"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">Los Machetes</h5>
                        <p className="card-text">En un mismo machete puedes elegir tres guisados, así que sin presión.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Dirección: Manuel Payno 56, Obrera, Cuauhtémoc, 06800 Ciudad de México, CDMX</li>
                        <li className="list-group-item">Horario: Miercoles a lunes de 08:00 a 21:00</li>
                        <li className="list-group-item">Teléfono: 55 5588 5050</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info.</a>
                    </div>
                </div>

                <div className="card my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111)"}}>
                    <img src="https://4.bp.blogspot.com/-AnoKIhaHgMs/VSgYqYPJDpI/AAAAAAAAS9o/ZOYpsgxd_ek/s1600/POZOLE%2BLOGO%2B1.jpg"
                        className="card-img-top" alt="Pozole y birria"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">La Perla Tapatía</h5>
                        <p className="card-text">Birria y pozole de lo mejor para esa cruda de los sabaditos.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Dirección: H.Congreso de la Unión 5127, Belisario Domínguez, Gustavo A. Madero,
                        07869 Ciudad de México, CDMX</li>
                        <li className="list-group-item">Horario: Miercoles a Lunes de 08:00 a 23:00</li>
                        <li className="list-group-item">Teléfono: 55 2603 0035</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Mas info.</a>
                    </div>
                </div>

                <div className="card my-4" style={{width: "18rem", border: "solid 4px rgb(255, 21, 111)"}}>
                    <img src="https://regeneracion.mx/wp-content/uploads/2017/11/tacos.jpg" className="card-img-top"
                        alt="taqueriaelGuero"/>
                    <div className="card-body d-flex flex-column align-items-center">
                        <h5 className="card-title">Taqueria el Guero</h5>
                        <p className="card-text">Taqueria el guero.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Direccion: Ernesto Pugibet, frente al Mercado de San Juan. Sólo sábados y domingos.
                        </li>
                    </ul>
                    <div class="card-body">
                        <a href="localpage.html" class="card-link">Mas info.</a>
                    </div>
                </div>
           </section>

            <h2 className="textopri">¿¿.....Sabias que.....??</h2>
            <div className="datocurioso">
                <p>
                    *El pambazo más grande del mundo logró el Récord Guinness: el pambazo midió 2 metros con 32 centímetros y se bañó con 10 litros de salsa de chile guajillo.
                </p>
                <p>
                    *Con la participación de 40 cocineras que prepararon cien kilos de masa de nixtamal y guisaron 200 kilos de hongos, en diferentes presentaciones, se logró cocinar la quesadilla más grande de México y el mundo, que alcanzó una longitud de 100 metros, es decir, un tamaño mayor al originalmente programado de 50 metros.
                </p>
                <p>
                    *En 2014 el municipio de Colón batió el récord al elaborar la gordita más grande del mundo, alimento tradicional de la región que en ese año pesó 70 kilos y midió 2 metros de diámetro.
                </p>
                <p>
                    *Preparada con aproximadamente 85 cocineros locales, la torta más grande del mundo, estuvo rellena con más de 60 ingredientes hasta alcanzar sabores clásicos como milanesa, carne al pastor y otros exóticos como el de mantarraya, abominable bocadillo, el cual midió 67.80 metros de longitud y obtuvo un peso de 820 kilogramos. 
                </p>
            </div>
            </section>

        );
    }
}

export default Cards;