import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeState from './reducers/changeState';
import createStore from './createStore';
 
//this is where Redux creates a store that we pass to React:
// const store = createStore(changeState, changeBackground);
const store = createStore(changeState);
 
export function render() {
  ReactDOM.render(
    //the Redux store is passed as props to a React component and rendered to DOM
    <App store={store} />,
    document.getElementById('root')
  );

};

store.dispatch({ type: '@@INIT' });
