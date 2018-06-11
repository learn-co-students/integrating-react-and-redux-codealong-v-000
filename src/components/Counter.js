  import React from 'react'
 
  export default (props) => {
 
    const handleIncrease = () => {
      props.store.dispatch({ type: 'INCREASE_COUNT' });
    }
 
    const handleDecrease = () => {
      props.store.dispatch({ type: 'DECREASE_COUNT' });
    }
 

    return (
      <div>
        <button onClick={handleIncrease}>
          Click Me
        </button>
        <button onClick={handleDecrease}>
          Click Me
        </button>
        <div>{props.store.getState().count}</div>
      </div>
    )
  };