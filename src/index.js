import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import our reducer
import changeCount from './reducers/changeCount';
//import our createStore
import createStore from './createStore';
 
//creating store by calling our imported createStore with our imported reducer
const store = createStore(changeCount);

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

//initiate a dispatch call to start the store state
store.dispatch({ type: '@@INIT' });