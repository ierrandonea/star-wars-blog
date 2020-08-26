import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Characters from './views/characters';
import Planets from './views/planets';
import Navbar from './components/navbar';
import injectContext from './store/appContext';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters/:index" component={Characters} />
                    <Route exact path="/planets/:index" component={Planets} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);