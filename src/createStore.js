import { render } from './index.js'

const createStore = reducer => { 
  let state

  const dispatch = (action) => { 
    state = reducer(state, action)

    console.log(`the state is ${state.count}`)
    console.log(`the action is ${action.type}`)

    render()
  }

  const getState = () => { 
    return state
  }

  return {
    dispatch,
    getState
  }
}

export default createStore
