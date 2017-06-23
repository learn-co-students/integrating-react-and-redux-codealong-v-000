import React from 'react';

export default (props) => {
  
  const handleClick = (event) => {
    props.store.dispatch({ type: 'INCREASE_COUNT' });
  };

  return (
    <div>
      <button onClick={handleClick} >Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  );
};
