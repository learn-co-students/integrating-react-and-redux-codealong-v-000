import React from 'react'

export default (props) => {
  const { store } = props;
  const handleClick = () => {
    store.dispatch({ type: 'INCREASE_COUNT' })
  }
  return (
    <div>
      <button onClick={handleClick} >Click to Increase</button>
      <div>{store.getState().count}</div>
    </div>
  )
};
