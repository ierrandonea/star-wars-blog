import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../store/appContext';
import { Link } from 'react-router-dom';

const Characters = ({ history, match: { params: { index } } }, ...props) => {
    const { store: { people } } = useContext(Context);

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const charData = !!people ? people.filter((character, i) => i == index) : null;
        if (charData !== null) {
            setCharacter(...charData);
        }
    });

    return (
        <div className="container-fluid text-warning">
            <div className="row mt-3">
                <div className="col-12 col-md-6 col-lg-4 text-center text-md-left mb-4 mb-md-auto">
                    <img src="https://place-hold.it/400x700" class="img-fluid" alt="Responsive image"></img>
                </div>
                <div className="col-12 col-md-6 col-lg-8 text-center my-auto px-5">
                    <h1>{!!character && character.name}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae iusto, placeat ducimus ut fugiat sed totam quod? Quod, esse doloribus accusamus fugit a, aspernatur dolores nihil in, nobis cum facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem possimus laborum sint! Vero fugiat voluptas tempora quia voluptates reiciendis exercitationem velit illo ipsum architecto ex, dolores molestiae eos dolore?</p>
                </div>
            </div>
            <hr />
            <div className="row mt-2 mt-md-5">
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-calendar-times"></i></h4>
                    <h4>{!!character && character.birth_year}</h4>
                </div>
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-venus-mars"></i></h4>
                    <h4>{!!character && character.gender}</h4>
                </div>
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-ruler-vertical"></i></h4>
                    <h4>{!!character && character.height}</h4>
                </div>
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-weight-hanging"></i></h4>
                    <h4>{!!character && character.mass}</h4>
                </div>
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-palette"></i><i class="fas fa-user"></i></h4>
                    <h4>{!!character && character.skin_color}</h4>
                </div>
                <div className="col-4 col-md-2 mt-2 mt-md-auto text-center">
                    <h4><i class="fas fa-palette"></i><i class="fas fa-eye"></i></h4>
                    <h4>{!!character && character.eye_color}</h4>
                </div>
            </div>
            <div className="row">
                <button className="btn btn-info" onClick={() => history.push("/")}>Regresar</button>
            </div>
        </div>
    )
}

export default Characters;


