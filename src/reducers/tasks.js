import { tasksConstants } from '../constants';

const initialState = {
	items: [
		{
			id: "0",
			title: "Титл",
			desc: "Деск",
			category: "1"
		}
	]
};

export const tasks = (state = initialState, action) => {
	switch (action.type) {
		case tasksConstants.TASK_CREATE:
			const id = state.items.length.toString();
			return {
				...state,
				items: [...state.items, {id: id, title: "", desc: "", category: action.payload}]
			};
		case tasksConstants.TASK_UPDATE:
			return {
				...state,
				items: state.items.map(item => item.id === action.payload.id ? action.payload : item)
			};
		case tasksConstants.TASK_DELETE:
			return {
				...state,
				items: state.items.filter((item, index) => item.id !== action.payload)
			};
		case tasksConstants.TASK_CHANGE_TYPE:
			return {
				...state,
				items: state.items.map(item => item.id === action.payload.task.id ?
					{ ...item, category: action.payload.category.toString() } : 
					item
				) 
			};
		default:
			return state
	};
};