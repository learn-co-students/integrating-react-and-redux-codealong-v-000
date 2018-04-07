import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    // if (state) {
    //   console.log(`the state is ${state.count}`);
    // } else {
    //   console.log(`the state is ${state}`);
    // }
    state = reducer(state, action);
    // console.log(`the state is ${state.count}`);
    // console.log(`the action is ${action.type}`);
    render();
  };

  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };
};
