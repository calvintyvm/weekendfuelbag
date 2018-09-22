const SET_MAP_ADDRESS = 'SET_MAP_ADDRESS';

export const setMapAddress = address => ({
  type: SET_MAP_ADDRESS,
  payload: address,
});

const initialState = {
  address: '',
};
