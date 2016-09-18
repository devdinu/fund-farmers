import React, {Component} from 'react';
import  BuyerView from './buyerView.jsx'
import  Plan from './plan.jsx'
import {Link} from 'react-router'

class App extends Component {
    render() {
        const {farmers} = this.props
        return (
            <div>
                <div>            {
                    farmers
                        .map(function (farmer, index) {
                            return <Plan info={farmer} key={index}/>;
                        })
                }
                </div>
                <br/>
                <br/>
                <br/>
                <BuyerView plans={farmers}/>
                <div>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

// get this from service
App.defaultProps = {
    farmers: [
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

export default App