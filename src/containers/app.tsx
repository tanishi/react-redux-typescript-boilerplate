import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../redux/modules/reducer.ts';

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
};

function mapStateToProps(state : State) {
  return {
    state,
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({ ...Actions }, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispatchProps)(App);

export default AppContainer;
