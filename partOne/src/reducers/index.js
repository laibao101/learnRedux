

export default function rootReducer (state=[],action) {
	switch (action.type) {
		case "ADD_TODO":
			const { todos } = state;
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
		default:
			return state;
	}
}
