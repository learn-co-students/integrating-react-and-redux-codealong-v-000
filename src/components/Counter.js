import React from 'react'

export default (props) => {

  const handleOnClick = () => {
    props.store.dispatch({type: 'INCREASE_COUNT'})
  }

  const handleDecrease = () => {
    props.store.dispatch({type: 'DECREASE_COUNT'})
  }
  return (
    <div>
      <button onClick={handleOnClick}>
      Click Me
      </button>
      <button onClick={handleDecrease}>
      Click Me
      </button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
