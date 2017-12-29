import { render } from './';

const createStore = reducer => {
  let state;

  const dispatch = action => {
    state = reducer(state, action);
    console.log(`the state is ${state.count}`);
    console.log(`the action is ${action.type}`);
    // render()
  };

  const getState = () => state;

  return { dispatch, getState };
};

export default createStore;
