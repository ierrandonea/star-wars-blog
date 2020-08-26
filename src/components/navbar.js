import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = ({ location }) => {
    const classesHome = location.pathname == "/" ? " active" : "";
    return (
        <>
            <div className="container-fluid px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                </nav>
            </div>
        </>
    )
}

export default withRouter(Navbar);

