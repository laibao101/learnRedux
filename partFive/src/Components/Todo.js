import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text, id }) => {
	return (
		<li className="todo"
			style={{textDecoration: completed ? 'line-through' : 'none' }}
			onClick={()=>{onClick(id)}}
			>
			{text}
		</li>
	)
}

Todo.PropTypes = {
	onClick:PropTypes.func.isRequired,
	completed:PropTypes.bool.isRequired,
	text:PropTypes.string.isRequired
}

export default Todo;
