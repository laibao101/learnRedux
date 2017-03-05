

export default function rootReducer (state=[],action) {
	const { todos } = state;

	switch (action.type) {
		case "ADD_TODO":
			const todo = {
				id:action.id,
				text:action.text
			};
			return {
				todos:[
					...todos,
					todo
				]
			};
		case "COMPLETE_TODO":
			const { id  } = action;
			const index = todos.findIndex(todo=> todo.id === id );
			return {
				todos:todos.slice(0,index).concat(todos.slice(index+1))
			};
		default:
			return state;
	}
}
