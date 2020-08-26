import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';

const Planets = ({ history, match: { params: { index } } }, ...props) => {
    const { store: { planets } } = useContext(Context);

    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const planetData = !!planets ? planets.filter((planet, i) => i == index) : null;
        if (planetData !== null) {
            setPlanet(...planetData);
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <img src="https://place-hold.it/400x600" classname="img-fluid" />
                </div>
                <div className="col-7 text-center my-auto px-5">
                    <h1>{!!planet && planet.name}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iusto, placeat ducimus ut fugiat sed totam quod? Quod, esse doloribus accusamus fugit a, aspernatur dolores nihil in, nobis cum facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem possimus laborum sint! Vero fugiat voluptas tempora quia voluptates reiciendis exercitationem velit illo ipsum architecto ex, dolores molestiae eos dolore?</p>
                </div>
            </div>
            <hr />
            <div className="row d-flex flex-row justify-content-between">
                <div className="col-1">
                    <h4></h4>
                </div>
                <div className="col-1">
                    <h4></h4>
                </div>
                <div className="col-1">
                    <h4></h4>
                </div>
                <div className="col-1 text-center">
                    <h4></h4>
                </div>
                <div className="col-1 text-center">
                    <h4></h4>
                </div>
                <div className="col-1 text-center">
                    <h4></h4>
                </div>
            </div>
        </div>
    )
}

export default Planets;


