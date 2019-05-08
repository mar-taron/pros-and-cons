/**
 * Creates redux reducers from an initial state and map of action types -> reducer fns
 * @param initialState The initial state of the reducer
 * @param reducerMap A map of action types to reducer functions
 * @returns {function(*=, *): *}
 */
const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];

  return reducer ? reducer(state, action.payload) : state;
};

export {
  createReducer,
};
