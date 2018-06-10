import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount';
import createStore from './createStore';

const store = createStore(changeCount);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });
// what's the difference between dispatching within my createStore function and dispatching outside of it by creating my store const first and then calling dispatch on it? Is one way better than the other?

// REMOVE render() below:
// render();
