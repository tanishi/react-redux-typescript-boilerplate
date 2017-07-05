import * as React from 'react';
import { connect } from 'react-redux';

import { changeContent } from '../redux/modules/reducer.ts';

interface Props {
  content: string;
}

interface State {
  content: string;
}

const App = (props) => {
  const { state, changeContent } = props;

  return (
    <div onClick={changeContent}>{state.content}</div>
  );
}

function mapStateToProps(state : State) {
  return {
    state
  }
}

function mapDispatchProps(dispatch) {
  return {
    changeContent: () => dispatch(changeContent())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

export default AppContainer;
