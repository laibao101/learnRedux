import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
	<ul className="todo-list">
		{todos.map( todo => <Todo key={todo.id} {...todo} onClick={toggleTodo}></Todo>)}
	</ul>
);


TodoList.PropTypes = {
	todos:PropTypes.arrayOf(
		PropTypes.shape({
			id:PropTypes.number.isRequired,
			text:PropTypes.string.isRequired,
			completed:PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	toggleTodo:PropTypes.func.isRequired
}


export default  TodoList;
