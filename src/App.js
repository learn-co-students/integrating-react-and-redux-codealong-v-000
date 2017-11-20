import React, { Component } from 'react';
import Avatar from './components/Avatar';
import Background from './components/Background';
import Counter from './components/Counter';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={this.props.store} />
        <Avatar store={this.props.store} />
        <Background store={this.props.store} />
      </div>
    );
  };
};
 
export default App;