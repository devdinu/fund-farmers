import React from 'react';

var Plan = React.createClass({
    render () {
        return (<p>
            Name: {this.props.info.name} <br/>
            {this.props.info.description} <br/>
            Required Money: {this.props.info.project_cost} <br/>
            Crop: {this.props.info.crop} <br/>
        </p>);
    }
})

export default Plan;