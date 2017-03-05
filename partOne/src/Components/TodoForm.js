import React from 'react';


class TodoForm extends React.Component{
	render(){
		return (
			<form ref="todoForm" className="todo-form" onSubmit={this.handleSubmit}>
				<input type="text" ref="todo" className="todo-input"/>
				<button className="todo-btn" type="submit">Add todo</button>
			</form>
		)
	}

	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		const date = new Date();
		const id = date.getTime();
		const text = this.refs.todo.value;
		if (!text) {
			return ;
		}
		this.props.addTodo(id,text);
		this.refs.todoForm.reset();
	}
}


export default TodoForm;
