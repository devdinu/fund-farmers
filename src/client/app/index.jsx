import React from 'react';
import {render} from 'react-dom';

// get this from service
var farmersData =  {"farmers": [
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
}

var Farmer = React.createClass({
    render () {
        return (<p>
            Name: {this.props.info.name} <br/>
            {this.props.info.description} <br/>
            Required Money: {this.props.info.project_cost} <br/>
            Crop: {this.props.info.crop} <br/>
            { console.log(this.props.info, this.props.id) } <br/>
        </p>);
    }
})

class App extends React.Component {
  render () {
    return (
        <div>
            {
                this.props.farmers
                    .map(function(farmer, index) {
                        return <Farmer info={farmer} key={index}/>;
                    })
            }
        </div>
    );
  }
}

render(<App farmers={farmersData.farmers} />, document.getElementById('app'));
