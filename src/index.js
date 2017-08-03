import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount';
import createStore from './createStore';

const store = createStore(changeCount)
store.dispatch({type: '@@INIT'})

export function render() {
	console.log("here")
  ReactDOM.render(
<App store={store}/>,
    document.getElementById('root')
  );
};