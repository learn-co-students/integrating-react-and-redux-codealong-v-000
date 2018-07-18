import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App" >

        <Counter store={this.props.store}/>
        {/*in index.js const store = createStore(changeCount);*/}
      </div>
    );
  }
}

export default App;
