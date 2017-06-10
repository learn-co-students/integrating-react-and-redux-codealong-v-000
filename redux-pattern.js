




function render(){
  let container = document.getElementById('container');
  container.innerHTML = store.getState().count;
}

const store = createStore(changeCount);
let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch(a{ type: 'INCREASE_COUNT' })
});
