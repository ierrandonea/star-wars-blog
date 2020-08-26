import React from 'react';
import { Context } from './../store/appContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ history, location, match }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container text-warning">
                <h1 className="my-5">Characters</h1>
                <div className="row d-flex flex-row flex-nowrap overflow-auto">
                    {
                        !!store.people &&
                        store.people.map((person, index) => {
                            return (
                                <div className="card col-6 col-md-5 col-lg-4 px-0 mx-1 bg-dark" key={index}>
                                    <img src="https://place-hold.it/400x400" className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <div className="d-none d-md-block">
                                            <h6 className="card-subtitle my-2">Gender: {person.gender}</h6>
                                            <h6 className="card-subtitle my-2">Hair Colour: {person.hair_color}</h6>
                                            <h6 className="card-subtitle my-2">Eye Colour: {person.eye_color}</h6>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-baseline">
                                            <Link to={`/characters/${index}`} className="btn btn-primary mt-3">+</Link>
                                            <button type="button" class="btn btn-outline-warning"><i class="far fa-heart"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <h1 className="my-5">Planets</h1>
                <div className="row my-5 d-flex flex-row flex-nowrap overflow-auto">
                    {
                        !!store.planets &&
                        store.planets.map((planet, index) => {
                            return (
                                <div className="card col-6 col-md-5 col-lg-4 px-0 mx-1 bg-dark" key={index}>
                                    <img src="https://place-hold.it/400x400" className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{planet.name}</h5>
                                        <div className="d-none d-md-block">
                                            <h6 className="card-subtitle my-2">Population: {planet.population}</h6>
                                            <h6 className="card-subtitle my-2">Terrain: {planet.terrain}</h6>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-baseline">
                                            <Link to={`/planets/${index}`} className="btn btn-primary mt-3">+</Link>
                                            <button type="button" class="btn btn-outline-warning"><i class="far fa-heart"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;