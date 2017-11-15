import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeState from './reducers/changeState';
import createStore from './createStore';

const store = createStore(changeState);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );

};

store.dispatch({ type: '@@INIT' });
