// export default function createStore(reducer) {
//   let state;

//   function dispatch(action) {
//     state = reducer(state, action);
//     console.log(`the state is ${state.count}`);
//     console.log(`the action is ${action.type}`);
//     render();
//   };

//   function getState(){
//     return state;
//   };

//   return {
//     dispatch,
//     getState
//   };
// };

// function render(){
//   let container = document.getElementById('container');
//   container.innerHTML = store.getState().count;
// }

// const store = createStore(changeCount);
// let button = document.getElementById('button');

// button.addEventListener('click', function() {
//   store.dispatch({ type: 'INCREASE_COUNT' })
// });
