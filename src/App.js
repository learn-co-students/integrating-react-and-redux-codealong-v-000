import React, { Component } from 'react';
import Counter from './components/Counter';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <Counter store={ this.props.store } />
      </div>
    );
  }
}
