import React from 'react';
import {render, ReactDOM} from 'react-dom';
import Register from '../components/Login/Register.jsx'
import Login from '../components/Login/Login.jsx'
import App from '../components/app.jsx'
import {browserHistory, Router, Route} from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path="/src/client" component={App}>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Route>
    </Router>,
    document.getElementById('app'));