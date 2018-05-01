import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const store = createStore(changeCount)

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();
