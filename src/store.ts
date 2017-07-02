import { createStore } from 'redux';
import reducer from './reducers/reducer'

const initialState = {
  content: 'Hello World'
}

const store = createStore(reducer, initialState);

export default store;
