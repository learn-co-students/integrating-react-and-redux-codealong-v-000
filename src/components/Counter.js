import React from 'react'

// we have access to the store inside this Component bc we passed it in as props from App.js which got it from being passed in as props from index.js
export default (props) => {

  // accesses the store from our props that we passed through, and dispatches an action to increase the count.
  const handleOnClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' });
  }

  // button has a callback to onClick
  return (
    <div>
      <button onClick={handleOnClick}>
        Click Me
      </button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
