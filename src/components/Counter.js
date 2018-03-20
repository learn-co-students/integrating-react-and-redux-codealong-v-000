import React from 'react'

export default (props) => {
  const handleOnClick = () => {
    props.store.dispatch({ type: "INCREASE_COUNT"})
  }

  return 
    <div>
      <button onClick={handleOnClick}>Click Me</button>
      <p>{props.store.getState().count}</p>
    </div>
};
