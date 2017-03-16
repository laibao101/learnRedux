import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';


let addTodo = ({ dispatch }) => (
	<div>
		<form
			onSubmit={ e => {
				e.preventDefault();
				const value = this.refs.text.value
				if (!value) {
					return ;
				}
				dispatch(addTodo(value));
				value = '';
			}}
			>
			<input type="text" ref="text" />
			<button>
				submit
			</button>
		</form>
	</div>
)
