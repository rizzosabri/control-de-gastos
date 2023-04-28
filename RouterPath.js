
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio';

const RouterPath = () => {

    return (
        <Router>
            <Switch>
                {/* <Route path='/admin' exact={true} component={Admin} /> */}
                <Route path='/' exact={true} component={Login} />
                <Route path='/inicio' exact={true} component={Inicio} />
            </Switch>
        </Router>
    )
}

export default RouterPath;