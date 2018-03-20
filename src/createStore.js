import { render } from './index.js'

export default function createStore(reducer) {
  let state; 

  const dispatch = action => {
    state = reducer(state, action)
    console.log(`the state is ${state.count}`)
    console.log(`the action is ${action.type}`)
    render()
  }

  const getState = () => state;

  return {dispatch, getState}
}