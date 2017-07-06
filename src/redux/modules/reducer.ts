const CHANGE_CONTENT = 'CHANGE_CONTENT';

export function changeContent() {
  return {
    type: CHANGE_CONTENT,
  }
}

export default function Reducer(state, action) {
  switch(action.type) {
    case CHANGE_CONTENT: {
      return Object.assign({}, state, {
        content: 'Hello Tanishi',
      });
    }

    default: {
      return state;
    }
  }
}
