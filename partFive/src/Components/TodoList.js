import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default const TodoList = ({ todos, onClick }) => (
	<ul className="todo-list">
		{todos.map( todo => <Todo key={todo.id} {...todo} onClick={onClick}></Todo>)}
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
	onClick:PropTypes.func.isRequired
}
