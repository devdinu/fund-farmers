import React from 'react';

var Plan = React.createClass({

    render () {
        const handleClick = (props) => {
            console.log('You clicked: ' + props.info.name);
        };

        const style = {width: '150px', height: '30px'};
        return (<div>
            Name: {this.props.info.name} <br/>
            {this.props.info.description} <br/>
            Required Money: {this.props.info.project_cost} <br/>
            Crop: {this.props.info.crop} <br/>
            {
                this.props.isBuyer ? <button name="Add to cart" style={style} onClick={() => handleClick(this.props)}>Add to cart</button> : ''
            }
            <br/>
        </div>);
    }
})

export default Plan;