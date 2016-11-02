import React = require('react');
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {App} from './components/App';
import About from './components/content/About';
import Contact from './components/content/Contact';
import Home from './components/content/Home';
import Login from './components/content/Login';
import Register from './components/content/Register';

export function routerConfig(){
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>  
                <IndexRoute component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
                <Route path="login" component={Login} />
                <Route path="register" component={Register} />              
            </Route>
        </Router>
    );
}