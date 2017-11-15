import React from 'react'

 export default (props) => {

   const handleOnClick = () => {
     props.store.dispatch({ type: 'INCREASE_COUNT' });
   }

   const handleOnClick42 = () => {
     props.store.dispatch({ type: 'ADD_42' });
   }

   return (
     <div>
       <button onClick={handleOnClick}>
         Click Me
       </button>
       <button onClick={handleOnClick42}>
         Add 42
       </button>
       <div>{props.store.getState().count}</div>
     </div>
   )
 };
