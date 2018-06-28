import React from 'react'

const Counter = (props) => {

  const handleOnClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' });
  }

  return (
    <div>
      <button onClick={handleOnClick}>
        Click Me
      </button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
export default Counter;
