import { render } from './index';

export default function createStore(reducer) {
  let state; 

  function dispatch(action) {
    state = reducer(state, action);
    console.log(`the count is ${state.count}`);
    console.log(`the action is ${action.type}`)
    render()
  }

  function getState() {
    return state;
  }

  return {
    dispatch, 
    getState
  };
};
