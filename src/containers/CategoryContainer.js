import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { actions } from '../actions';
import TaskContainer from '../containers/TaskContainer';
import Category from '../components/Category';

const sortItemsByTitle = (items, type) => {
	items.sort((a, b) => {
		let valA = a.title.toLowerCase(), valB = b.title.toLowerCase();
		return valA < valB ? type : valA > valB ? type * -1 : 0;
	});
	return items;
};

class CategoryContainer extends Component {	

	state = {
		sorting: 0,
		tasks: { items: []},
		prevProps: {}
	};
	
	static getDerivedStateFromProps = (props, state) => {
		const { prevProps } = state;

		if(prevProps.tasks !== props.tasks){
			const itemsFiltered = props.tasks.items.filter(item => item.category === props.category.id);
			return {
				tasks: {
					items: state.sorting === 0 ? itemsFiltered : sortItemsByTitle(itemsFiltered, state.sorting)
				},
				prevProps: props
			};
		};
		return { prevProps: props };
	};
	
	componentDidMount = () => {
		const { tasks } = this.props;
		const itemsFiltered = tasks.items.filter(item => item.category === this.props.category.id);
		this.setState({ tasks: { items: itemsFiltered } });
	};

	createTaskHandler = () => {
		const { category, createTask } = this.props;
		createTask(category.id);
	};
	
	sortTaskHandler = () => {
		const { sorting, tasks } = this.state;
		const newSorting = sorting === 0 ? -1 : sorting === -1 ? 1 : -1;
		const sortedItems = sortItemsByTitle(tasks.items, newSorting);
		
		this.setState({
			sorting: newSorting,
			tasks: {
				items: sortedItems
			}
		});
	};
		
	render = () => (
		<Category
			category={this.props.category}
			sorting={this.state.sorting}
			sortTask={this.sortTaskHandler}
			createTask={this.createTaskHandler}
		>
			<TaskContainer
				tasks={this.state.tasks}
			/>
		</Category>
	);
};

export default connect(
	state => ({ tasks: state.tasks, categories: state.categories }),
	{ 
		createTask: actions.createTask,
		removeTask: actions.removeTask,
		updateTask: actions.updateTask
	}
)(CategoryContainer);

CategoryContainer.propTypes = {
	tasks: PropTypes.object,
	categories: PropTypes.object,
	createTaskHandler: PropTypes.func,
	sortTaskHandler: PropTypes.func,
	createTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired
};