import React from 'react';

export default ({ onMouseOver, onMouseOut, categories, handleChangeCategory, style }) => (
	<span className="task-move" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
		<span>Переместить v</span>
		<ul className="task-move-drop" style={style}>
			{categories.map((category, index) => (
				<li key={index} value={category.id} onClick={handleChangeCategory}>{category.title}</li>
			))}
		</ul>
	</span>
);