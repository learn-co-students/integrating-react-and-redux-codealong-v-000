import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import stores and reducers
import changeCount from './reducers/changeCount';
import createStore from './createStore';

//set store var equal to store with reducer passed in as argument
const store = createStore(changeCount);

//pass store in as props to React Component
export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' })
