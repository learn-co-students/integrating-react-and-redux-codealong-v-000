import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App" >
        <Counter store={store} />
      </div>
    );
  }
}

export default App;
