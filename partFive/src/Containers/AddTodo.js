import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';


let AddTodo = ({ dispatch }) => {
	let input;
	return (
		<div>
			<form
				onSubmit={ e => {
					e.preventDefault();
					if (!input.value) {
						return ;
					}
					dispatch(addTodo(input.value));
					input.value = '';
				}}
				>
				<input type="text" ref={node => {
					input = node;
				}} />
				<button>
					submit
				</button>
			</form>
		</div>
	)

}
AddTodo = connect()(AddTodo);

export default AddTodo;
