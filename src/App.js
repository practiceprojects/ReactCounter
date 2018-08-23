import React, { Component } from 'react';
import Displayer from './Displayer';
import CountModifier from './CountModifier';
//import Incrementer from './Incrementer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 42
    };
  }

decrement = () => {
  const old = this.state.number;
  //if (old == 40){
  //  return;
 // }
 //LOGIC BELONGS IN THE APP - CLOSE TO WHERE THE STATE IS SET. DECREMENTER & INCREMENTER ARE 
 //"DUMB" COMPONENTS. APP IS "SMART" COMPONENT
  this.setState({number: old - 1 });
}

increment = () => {
  const old = this.state.number;
  this.setState({number: old +  1 });
}

  render() {
    return (
<div>
<Displayer number={this.state.number }/>
<CountModifier onChange={this.decrement} label="--"/>
<CountModifier onChange={this.increment} label="++"/>
</div>
    );
  }
}

export default App;