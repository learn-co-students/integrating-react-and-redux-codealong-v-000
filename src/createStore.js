import { render } from './index.js';


function createStore(reducer) {
  let state;

  function dispatch(action) {
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

function changeCount(state = {
  count: 0,
}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  };
};
