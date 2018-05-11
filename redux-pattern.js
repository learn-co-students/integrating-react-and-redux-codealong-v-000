// moved to createStore.js
// function createStore(reducer) {
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


// moved to reducers/changeCounter.js
// function changeCount(state = {
//   count: 0,
// }, action) {
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return { count: state.count + 1 };
//     default:
//       return state;
//   };
// };

//this is now function holding ReactDom.render()  in index.js
// function render(){
//   let container = document.getElementById('container');
//   container.innerHTML = store.getState().count;
// }

// moved to index.js
// const store = createStore(changeCount);


//this is in counter component now
// let button = document.getElementById('button');

//this is in counter component now
// button.addEventListener('click', function() {
//   store.dispatch({ type: 'INCREASE_COUNT' })
// });
