import React, { Component } from 'react';

//add the Counter Component to to the ./src/App.js Component 
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App" >
      {/* pass in the store as props */}
        <Counter store={this.props.store} />
      </div>
    );
  }
}

export default App;
