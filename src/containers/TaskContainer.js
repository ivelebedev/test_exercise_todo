import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { actions } from '../actions';
import Task from '../components/Task';

class TaskContainer extends Component {	
	
	removeTaskHandler = id => this.props.removeTask(id);
	
	updateTaskHandler = e => {
		const { updateTask, tasks } = this.props;
		const items = tasks.items.filter(item => item.id === e.target.index);
		const updatedItem = {...items[0], [e.target.name]: e.target.value};
		updateTask(updatedItem);
	};

	render() {
		return this.props.tasks.items.length ? (
			<Task
				tasks={this.props.tasks}
				removeTask={this.removeTaskHandler}
				handleBlur={this.updateTaskHandler}
			/>
		) : ( <span style={{opacity: ".1"}}>Пусто</span> )
	};
};

export default connect(
	null,
	{ 
		removeTask: actions.removeTask, 
		updateTask: actions.updateTask 
	}
)(TaskContainer);

TaskContainer.propTypes = {
	removeTaskHandler: PropTypes.func,
	updateTaskHandler: PropTypes.func,
	removeTask: PropTypes.func.isRequired,
	updateTask: PropTypes.func.isRequired
};