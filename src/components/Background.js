import React from 'react'

 export default (props) => {

   const handleOnClickBlue = () => {
     props.store.dispatch({ type: 'BLUE' });
   }

   return (
     <div>
        <h3 className={props.store.getState().background}>what color am i ?</h3>
        <button onClick={handleOnClickBlue}>TurnBlue</button>
     </div>
   )
 };
