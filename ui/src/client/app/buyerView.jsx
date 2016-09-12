import React from 'react';
import  Plan from './plan.jsx'

var BuyerView = React.createClass({
    render () {
        return (<div>
            <div><strong>BuyerView</strong></div>
            <div>
            {
                this.props.plans.map(function(farmer, index) {
                  return <Plan info={farmer} key={index} isBuyer={true}/>;
                })
            }
            </div>
        </div>);
    }
});

export default BuyerView;