import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('action', action);
      return [ action.payload.data, ...state ];
  }
  return state;
}
