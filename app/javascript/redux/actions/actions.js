/**
const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting
});

const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error
})
*/
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

const getGreeting = async () => {
  try {
    const response = await fetch('api/greetings')
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(`Error: ${error}`);
    return error;
  }
};

const greetingsActions = () => async (dispatch) => {
  const data = await getGreeting();
    return dispatch({
      type: GET_GREETING_SUCCESS,
      payload: data.message,
    });
};

export default greetingsActions;
