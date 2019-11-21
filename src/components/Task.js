import React from 'react';
import ContentEditableInput from './ContentEditableInput';
import CategoryChangerContainer from '../containers/CategoryChangerContainer';

const Task = ({ handleChange, handleBlur, removeTask, tasks, children }) => {
	return (
		<div className="board">
			{tasks.items.map(task =>
				<task key={task.id}>
					<ContentEditableInput index={task.id} name="title" className="task-name" html={task.title} onBlur={handleBlur} placeholder="Название задачи" />
					<ContentEditableInput index={task.id} name="desc" className="task-description" html={task.desc} onBlur={handleBlur} placeholder="Описание задачи" />
					<div className="task-options">
						<span className="task-delete" onClick={() => removeTask(task.id)}>Удалить</span>
							<CategoryChangerContainer
								task={task}
							/>
					</div>
				</task>
			)}
		</div>
	);
};

export default Task;