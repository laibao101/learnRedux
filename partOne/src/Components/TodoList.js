import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
		const todos = this.props.todos || [];
		console.log(todos);
    return (
			<div className="todo-list">
				{todos.map(todo=><TodoItem key={todo.id} {...todo}></TodoItem>)}
			</div>
		);
  }
}
