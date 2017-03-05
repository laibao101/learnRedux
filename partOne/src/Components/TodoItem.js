import React from 'react';

export default class TodoItem extends React.Component {
  render() {
		const { text, completeTodo, id } = this.props;
    return (
			<li className="todo-item" onClick={completeTodo.bind(null,id)}>{text}</li>
		);
  }
}
