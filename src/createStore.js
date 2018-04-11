import { render } from './index.js';

export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    //dispatch has access to the reducer and state after the store is created,
    //allowing for subsequent changes to the state when an action is dispatched
    state = reducer(state, action);
    console.log(`the state is ${state.count}`);
    console.log(`the action is ${action.type}`);
    render();
  };

  function getState(){
    return state;
  };

  return {
    dispatch,
    getState
  };
};

