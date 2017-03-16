import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../Actions';

const mapStateToProps = state => ({
	todos:getVisibleTodos(state.todos,state.visibilityFilter)
})


const getVisibleTodos = (todos,filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_ACTIVE':
			return todos.filter( todo => !todo.completed);
		case 'SHOW_COMPLETED':
			return todos.filter( todo => todo.completed);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ toggleTodo }, dispatch);


const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
