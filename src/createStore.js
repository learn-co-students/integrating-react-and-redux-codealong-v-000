import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action)
    console.log(`the state is ${state.count}`)
    console.log(`the actionis ${action.type}`)
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
