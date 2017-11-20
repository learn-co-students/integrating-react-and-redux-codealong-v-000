export default function changeState(state = {count: 0}, action) {
  switch (action.type) {

//state.avatar is left 'as is', not updated, not set, left as is...
    case 'INCREASE_COUNT':
      return { count: state.count + 1, avatar: state.avatar };
 
    case 'ADD_42':
      return { count: state.count + 42, avatar: state.avatar };
 
    case 'HIDE_AVATAR':
      return { count: state.count, avatar: 'hide' };

    case 'SHOW_AVATAR':
      return { count: state.count, avatar: 'show' };

    case 'BLUE':
      return { count: state.count, avatar: state.avatar, background: 'blue' };
      
    case 'BLUE': 
      return { count: state.count, avatar: state.avatar, background: 'blue' };
      
    case 'RED': 
      return { count: state.count, avatar: state.avatar, background: 'red' };
      
    case 'GREEN': 
      return { count: state.count, avatar: state.avatar, background: 'green' };
      
    case 'YELLOW':
      return { count: state.count, avatar: state.avatar, background: 'yellow' };

    default:
      return state;
  };
};
