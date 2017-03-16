import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => {
	return (
		<li className="todo"
			style={{textDecoration: completed ? 'line-through' : 'none' }}
			onClick={()=>{console.log(2222);onClick()}}
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
