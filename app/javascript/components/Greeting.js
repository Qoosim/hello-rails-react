import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import greetingsActions from '../redux/actions/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);
  console.log('greeting component', greeting);

  useEffect(() => {
    dispatch(greetingsActions());
  }, []);

  return (
    <>
      Greeting: { greeting || 'no value' }
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



/**
import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import greetingsActions from '../redux/actions/actions';

class Greeting extends React.Component {
	render() {
		console.log(this.props);
		const { greeting } = this.props
		let greetUsers = greeting['actions'] 
	  greetUsers = greetUsers ? greetUsers : []
		console.log(greetUsers)
	
		return (
			<>
				<h1>Greetings App</h1>
				<ul>
						{greetUsers.greeting}
				</ul>
				<button onClick={() => this.props.greetingsActions()}>Greet</button>
			</>
		)
	}
}

const structuredSelector = createStructuredSelector({
	greetings: state => state.greetings
})

const mapDispatchToProps = { greetingsActions }


Greeting.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
*/

