const SET_LONGITUDE = 'SET_LONGITUDE';
const SET_LATITUDE = 'SET_LATITUDE';
const SET_AGE = 'SET_AGE';
const SET_CATEGORY = 'SET_CATEGORY';
const SET_QUERY = 'SET_QUERY';

export const setLongitude = longitude => ({
  type: SET_LONGITUDE,
  payload: longitude,
});

export const setLatitude = latitude => ({
  type: SET_LATITUDE,
  payload: latitude,
});

export const setAge = age => ({
  type: SET_AGE,
  payload: age,
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setQuery = query => ({
  type: SET_QUERY,
  payload: query,
});

const initialState = {
  longitude: 0,
  latitude: 0,
  age: '',
  category: '',
  query: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LONGITUDE:
      return {
        ...state,
        longitude: action.payload,
      };
    case SET_LATITUDE:
      return {
        ...state,
        latitude: action.payload,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
