import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch (action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //same as concat [city, city, city]
      // return state.push(action.payload).data  -- NG cause youre MUTATING 
  }
  return state;
}