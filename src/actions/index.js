import { tasksConstants } from '../constants';

//let counter = 1;

const createTask = payload => {
	//const id = (counter++).toString();
	return {
		type: tasksConstants.TASK_CREATE,
		//payload: { id: id, category: payload }
		payload
	};
};

const updateTask = payload => {
	return {
		type: tasksConstants.TASK_UPDATE,
		payload
	};
};

const removeTask = payload => {
	return {
		type: tasksConstants.TASK_DELETE,
		payload
	};
};

const changeTaskCategory = (task, category) => {
	return {
		type: tasksConstants.TASK_CHANGE_TYPE,
		payload: { task, category }
	};
};

export const actions = {
	createTask,
	updateTask,
	removeTask,
	changeTaskCategory
};