import React, { Component } from 'react';
//add the Counter Component
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      //pass in the store as props
      <div className="App" >
        <Counter store={this.props.store} />
      </div>
    );
  }
}

export default App;
