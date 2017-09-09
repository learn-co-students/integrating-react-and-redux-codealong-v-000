import React from 'react'

export default (props) => {

  const handleClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' })
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <div>{props.store.getState() ? props.store.getState().count : 0}</div>
    </div>
  )
};
