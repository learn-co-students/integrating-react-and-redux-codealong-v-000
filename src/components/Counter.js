import React from 'react'

export default (props) => {
  //dispatch an action each time the button is clicked
  const handleOnClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT'})
  }

  /*
  add a button and a place to display the current count
  button has a callback to the onClick event
  each time a button is clicked it calls the function
  the function accesses the store from the props
  dispatches an action to increase the count
  */
  return (
    <div>
      <button onClick={handleOnClick}>
        Click Me
      </button>
      <div>{props.store.getState().count}</div>
    </div>
  )
}
