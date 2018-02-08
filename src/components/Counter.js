import React from 'react'

export default (props) => {

  const handleOnClick = () => {
    props.store.dispatch({ type: 'INCREASE_COUNT'});
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

// SAME THING...READS A BIT BETTER TO ME AT THIS POINT.
// const Counter = (props) => {
//   return (
//     <div>
//      <button>Click Me</button>
//      <div>0</div>
//     </div>
//   )
// }
//
// export default Counter;
