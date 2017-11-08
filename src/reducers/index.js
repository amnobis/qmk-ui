import * as ActionTypes from '../actions';
import { combineReducers } from 'redux';

// Updates an entity cache in response to any action with response.entities.
const initialState = {
  layout: [[]],
  matrix: [[[]]]
};

function layout(state, action) {
  switch (action.type) {
    case "BLAH":
      return Object.assign({}, state, {
        layout: action.layout
      });
    default:
      return state
  }
}

function matrix(state, action) {
  switch (action.type) {
    case "UPDATE_KEY":
      return {
        ...state,
        matrix: state.matrix.map((layer, i) => {
            if (i === action.layer) {
              layer.map((row, j) => {
                if (j === action.row) {
                  row.map((key, k) => {
                    if (k === action.key) {
                      return {...key, code: action.code}
                    } else {
                      return key;
                    }
                  })
                } else {
                  return row;
                }
              })
            } else {
              return layer;
            }
          }
        )
      };
    default:
      return state
  }
}

const rootReducer = combineReducers({
  layout,
  matrix
});

export default rootReducer;
