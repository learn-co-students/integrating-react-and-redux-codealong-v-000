function render(){
  let container = document.getElementById('container');
  container.innerHTML = store.getState().count;
}

let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' })
});
