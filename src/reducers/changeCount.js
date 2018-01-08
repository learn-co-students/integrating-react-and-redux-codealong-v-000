export default function changeCount(state = {count: 0}, action) {
    switch (action.type) {
      case 'INCREASE COUNT':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }


  