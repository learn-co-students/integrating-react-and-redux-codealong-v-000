export default function changeBackground(state = {background: 'blue', count: state.count}, action) {
  switch (action.type) {

    case 'BLUE':
    return { background: 'blue' };
    
    case 'RED':
    return { background: 'red' };
    
    case 'GREEN':
    return { background: 'green' };
    
    case 'YELLOW':
    return { background: 'yellow' };
  
    default:
      return state;
  };
};
