// The flow is that a React eventHandler calls a callback [ in Counter.js] 
// which then calls store.dispatch() [in createStore] to dispatch an action [in changeCount.js]
// Inside the dispatch action is a call to render(), which re-renders the application
// So each time someone clicks on ther counter button, the store is updated, and
// then the application is re-rendered

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from "./reducers/changeCount"
import createStore from "./createStore"

const store = createStore(changeCount)

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: "@@INIT" })
