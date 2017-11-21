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
        <button onClick={handleOnClickBlue} className="blue">TurnBlue</button>
        <button onClick={handleOnClickGreen} className="green">TurnGreen</button>
        <button onClick={handleOnClickRed} className="red">TurnRed</button>
        <button onClick={handleOnClickYellow} className="yellow">TurnYellow</button>
     </div>
   )
 };
