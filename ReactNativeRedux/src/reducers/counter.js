import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  count: 0
})

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT: {
      const count = state.get('count');
      return state.set('count', count + 1);
    }
    case types.DECREMENT: {
      const count = state.get('count');
      return state.set('count', count - 1);
    }
    default:
      return state;
  }
}
