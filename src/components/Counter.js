import React from 'react'

export default ({ store }) => {
  const handleOnClick = (e) => {
    let action = e.target.dataset.type;
    action === "INCREASE" ? store.dispatch({ type: 'INCREASE_COUNT' }) : store.dispatch({ type: 'DECREASE_COUNT' });
  }
  return (
    <div>
      <button onClick={handleOnClick} data-type="INCREASE">
        Going Up
      </button>
      <button onClick={handleOnClick} data-type="DECREASE">
        Going Down
      </button>
      <div>{ store.getState().count }</div>
    </div>
  )
};
