import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import greetingsActions from '../redux/actions/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(greetingsActions());
  }, []);

  return (
    <>
      Greeting: { greeting ? greeting : 'Loading...' }
    </>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

Greeting.defaultProps = {
  greeting: '',
};

export default Greeting;
