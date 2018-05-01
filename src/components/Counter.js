import React from 'react'

export default (props) => {

  const handleClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' });
  }
  
  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
      <div>0</div>
    </div>
  )
};
