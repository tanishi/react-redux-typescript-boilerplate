function Reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_CONTENT': {
      return Object.assign({}, state, {
        content: 'Hello Tanishi'
      })
    }

    default: {
      return state;
    }
  }
}

export default Reducer;
