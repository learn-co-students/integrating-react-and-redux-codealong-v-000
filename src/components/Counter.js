import React from 'react'
 
  export default (props) => {
 
    const handleOnClick = () => {
      props.store.dispatch({ type: 'INCREASE_COUNT' });
    }
 
    return (
      <div>
        <div>{props.store.getState().count}</div>
        <button onClick={handleOnClick}>
          Click Me
        </button>
      </div>
    )
  };
