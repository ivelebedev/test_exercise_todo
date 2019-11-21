import React from 'react'

const Category = ({ createTask, sortTask, category, sorting, children }) => (
	<div className={"column " + category.slug}>
		<div className="name">
			<span className="name-common">{category.title}</span>
			<span className="name-sort" onClick={sortTask}>sort {sorting !== 1 ? '(A-я)' : '(Я-а)'}</span>
		</div>
		<div className="add-task"> 
			<span className="add-task-text" onClick={createTask}>Добавить задачу</span> 
		</div>
			<div className="board">
				{children}
			</div>
	</div>
);

export default Category;