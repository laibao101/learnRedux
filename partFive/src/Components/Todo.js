import React, { PropTypes } from 'react';

export default Todo = ({ onClick, completed, text }) => {
	<li className="todo"
		style={{textDecoration: completed ? 'line-through' : 'none' }}
		onClick={onClick}
		>
		{text}
	</li>
}

Todo.PropTypes = {
	onClick:PropTypes.func.isRequired,
	completed:PropTypes.bool.isRequired,
	text:PropTypes.string.isRequired
}
