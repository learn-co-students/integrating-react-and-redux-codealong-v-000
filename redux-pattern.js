



const store = createStore(changeCount);
let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' })
});
