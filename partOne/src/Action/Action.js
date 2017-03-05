
//add todo
export function addTodo (id,text) {
	return {
		type:'ADD_TODO',
		id,
		text
	}
}


//complete todo
export function completeTodo (id) {
	return {
		type:'COMPLETE_TODO',
		id
	}
}


//active todo
export function activeTodo (id) {
	return {
		type:'ACTIVE_TODO',
		id
	}
}
