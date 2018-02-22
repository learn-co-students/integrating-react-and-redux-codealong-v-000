import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    console.log(`this state is ${state.count}`);
    console.log(`this action is ${action.type}`);
    render()
  }

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};
