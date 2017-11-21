import React from 'react'

  export default (props) => {

    const handleOnClickHideAvatar = () => {
      props.store.dispatch({ type: 'HIDE_AVATAR' });
    }

    const handleOnClickShowAvatar = () => {
      props.store.dispatch({ type: 'SHOW_AVATAR' });
    }
 
   return (
     <div>
       <fieldset>
        <img className={props.store.getState().avatar} src="./brad.png" alt="brad-img" />
        <br />
        <button onClick={handleOnClickHideAvatar}>
          Hide Avatar
        </button>
        <button onClick={handleOnClickShowAvatar}>
          Show Avatar
        </button>
       </fieldset>
     </div>
   )
 };
