
// ./src/createStore.js

import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    console.log(`the state is ${state.count}`)
    console.log(`the action is ${action.type}`)
    // store calls on render method to force re-rendering upon change of state
    render()
  };

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};
