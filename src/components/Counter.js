import React from 'react'


//note that this is still a react component (accepts props, returns single element)
//but it's being defined as an anonymous arrow function
//and so (I guess) when you import this module, you get the whole thing?
export default (props) => {

  const handleOnClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT' });
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};