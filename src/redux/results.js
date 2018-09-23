const SET_RESULT = 'SET_RESULT';

export const setResult = result => ({
  type: SET_RESULT,
  payload: result,
});

const initialState = {
  result: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
