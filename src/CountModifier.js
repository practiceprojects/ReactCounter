import React, { Component } from 'react';

class CountModifier extends Component{
    render() {
        return(
         <button onClick={this.props.onChange}>
         {this.props.label}
         </button>
        );
    }
}

export default CountModifier;