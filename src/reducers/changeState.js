export default function changeState(state = {count: 0}, action) {
  switch (action.type) {

//state.avatar is left 'as is', not updated, not set, left as is...
    case 'INCREASE_COUNT':
    return { count: state.count + 1, avatar: state.avatar };

//state.avatar is left 'as is', not updated, not set, left as is...
    case 'ADD_42':
    return { count: state.count + 42, avatar: state.avatar };

//state.count is left 'as is', not updated, not set, left as is...
    case 'HIDE_AVATAR':
    return { count: state.count, avatar: 'hide' };

//state.count is left 'as is', not updated, not set, left as is...
    case 'SHOW_AVATAR':
      return { count: state.count, avatar: 'show' };
    default:
      return state;
  };
};
