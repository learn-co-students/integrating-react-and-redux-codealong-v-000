import React from 'react'

export default (props) => {
	const handleonClick = () => {
		props.store.dispatch({ type: 'INCREASE_COUNT' });
	}

  return (
    <div>
      <button onClick={handleonClick}>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
