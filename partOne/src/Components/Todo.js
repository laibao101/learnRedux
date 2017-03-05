import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';

class Todo extends React.Component{
	render(){
		return (
			<div className="todo">
				<TodoForm addTodo={this.props.addTodo}></TodoForm>
				<TodoList {...this.props}></TodoList>
				<Footer></Footer>
			</div>
		)
	}
}


export default Todo;
