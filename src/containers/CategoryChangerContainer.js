import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { actions } from '../actions';
import CategoryChanger from '../components/CategoryChanger';

class CategoryChangerContainer extends Component {	

	state = {
		style: {
			display: 'none'
		}
	};
	
	changeTaskCategoryHandler = e => {
		const { changeTaskCategory, task } = this.props;
		changeTaskCategory(task, e.target.value.toString());
	};
	
	onMouseOverHandler = e => {
		this.setState({ style: { display: 'block' } });
	};
	
	onMouseOutHandler = e => {
		this.setState({ style: { display: 'none' } });
	};

	render() {
		const filteredCategories = this.props.categories.items.filter(category => category.id !== this.props.task.category);
		return (
			<CategoryChanger
				categories={filteredCategories}
				style={this.state.style}
				onMouseOver={this.onMouseOverHandler}
				onMouseOut={this.onMouseOutHandler}
				handleChangeCategory={this.changeTaskCategoryHandler}
			/>
		) ;
	};
};

export default connect(
	state => ({ categories: state.categories }),
	{ 
		changeTaskCategory: actions.changeTaskCategory 
	}
)(CategoryChangerContainer);

CategoryChangerContainer.propTypes = {
	categories: PropTypes.object,
	changeTaskCategoryHandler: PropTypes.func,
	onMouseOverHandler: PropTypes.func,
	onMouseOutHandler: PropTypes.func,
	changeTaskCategory: PropTypes.func.isRequired
};