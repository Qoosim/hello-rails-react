const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const initialState = ''

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case GET_GREETING_SUCCESS:
      return action.payload
    default:
      return state;
  }
};

export default greetingReducer;
