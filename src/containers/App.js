import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import CategoryContainer from './CategoryContainer';

class App extends React.Component {

	render = () => (
	
		<div className="wrapper">
			{this.props.categories.items.map((category, index) => (
				<CategoryContainer key={ index } category={ category } />
			))}
		</div>
		
	);
	
};

export default connect(
	state => ({ categories: state.categories }),
	null
)(App);

App.propTypes = {
	categories: PropTypes.object
};