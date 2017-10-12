import React, { Component } from 'react';
import Counter from './components/Counter'

class App extends Component {

  render() {
    console.log(this.props.store)
    return (
      <div className="App" >
        <Counter store={this.props.store}/>
      </div>
    );
  }
}

export default App;
