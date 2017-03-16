import React from 'react';
import VisibleTodoList from '../Containers/VisibleTodoList';
import AddTodo from '../Containers/AddTodo';
import Footer from './Footer';


export default const App = () => (
	<div className="app">
		<AddTodo></AddTodo>
		<VisibleTodoList></VisibleTodoList>
		<Footer></Footer>
	</div>
)
