import React from 'react'

 export default (props) => {

   const handleOnClickBlue = () => {
     props.store.dispatch({ type: 'BLUE' });
   }
   const handleOnClickGreen = () => {
     props.store.dispatch({ type: 'GREEN' });
   }
   const handleOnClickRed = () => {
     props.store.dispatch({ type: 'RED' });
   }
   const handleOnClickYellow = () => {
     props.store.dispatch({ type: 'YELLOW' });
   }

   return (
     <div>
        <h3 className={props.store.getState().background}>what color am i ?</h3>
        <button onClick={handleOnClickBlue}>TurnBlue</button>
        <button onClick={handleOnClickGreen}>TurnGreen</button>
        <button onClick={handleOnClickRed}>TurnRed</button>
        <button onClick={handleOnClickYellow}>TurnYellow</button>
     </div>
   )
 };
