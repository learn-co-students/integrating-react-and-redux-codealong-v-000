import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//need to import our reducer and a store
import changeCount from './reducers/changeCount';
import createStore from './createStore';

//set a variable of store that calls our createStore() function
const store = createStore(changeCount);

export function render() {
  ReactDOM.render(
    //pass our store variable as props. Now our app component will have access to the store, and because of this, we can call store.dispatch({ type: 'INCREASE_COUNT' }) every time the user clicks on a button.
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });


// remove render() here
