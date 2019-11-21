import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { categories } from './categories';

const rootReducer = combineReducers({
	categories: categories,
	tasks: tasks
});

export default rootReducer;