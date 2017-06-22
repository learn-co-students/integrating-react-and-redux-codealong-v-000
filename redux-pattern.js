function changeCount(state = {
  count: 0,
}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  };
};


function render(){
  let container = document.getElementById('container');
  container.innerHTML = store.getState().count;
}
const store = createStore(changeCount);
let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' })
});
