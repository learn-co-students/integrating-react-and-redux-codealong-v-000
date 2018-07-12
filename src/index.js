import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount'
import createStore from './createStore'

const store = createStore(changeCount)

console.log('something!')
export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' })
