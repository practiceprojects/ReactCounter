import React, {Component} from 'react';

class Displayer extends Component{
    render(){
        const {number} = this.props;
        return(
            <div>{number}</div>
        );
    }
}

export default Displayer;