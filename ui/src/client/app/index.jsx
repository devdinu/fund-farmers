import React from 'react';
import {render, ReactDOM} from 'react-dom';
import  Plan from './plan.jsx'
import  BuyerView from './buyerView.jsx'
import Register from '../components/Login/Register.jsx'
import Login from '../components/Login/Login.jsx'

// get this from service
var plans = {
    "farmers": [
        {
            "name": "farmer1",
            "crop": "rice",
            "description": "i am gonna cultivate rice, time: 2yr",
            "project_cost": 200000
        },
        {
            "name": "farmer2",
            "crop": "wheat",
            "description": "Time: 1yr",
            "project_cost": 100000
        }
    ]
};

class App extends React.Component {
    render() {
        return (
            <div>
                <div>            {
                    this.props.farmers
                        .map(function (farmer, index) {
                            return <Plan info={farmer} key={index}/>;
                        })
                }
                </div>
                <br/>
                <br/>
                <br/>
                <BuyerView plans={this.props.farmers}/>
                <ul>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
        );
    }
}

render(<App farmers={plans.farmers}/>, document.getElementById('app'));
ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Route>
    </Router>,
    document.getElementById('app'));