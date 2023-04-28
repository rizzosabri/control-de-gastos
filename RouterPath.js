
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './src/pages/Login';
const RouterPath = () => {

    return (
        <Router>
            <Switch>
                {/* <Route path='/admin' exact={true} component={Admin} /> */}
                <Route path='/' exact={true} component={Login} />
            </Switch>
        </Router>
    )
}

export default RouterPath;